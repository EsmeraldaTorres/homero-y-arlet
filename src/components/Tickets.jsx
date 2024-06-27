import React, { useEffect, useRef, useState } from "react";
import { useGuest } from "../Context/GuestContext";
import "./invitacion.css";
import jsPDF from "jspdf";
import { useParams, Link } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import decoration from "../assets/img/Untitled design (3).png";

const Tickets = () => {
  const { guest, fetchDataByGuest } = useGuest();
  const [ticketsConfirmados, setTicketsConfirmados] = useState();
  const [message, setMessage] = useState("");
  const printRef = useRef();
  let { id } = useParams();

  const handleDownloadPdf = async () => {
    const pdf = new jsPDF("p", "pt", "letter");
    const width = pdf.internal.pageSize.getWidth();
    const height = pdf.internal.pageSize.getHeight();

    // Tamaño de la imagen en el PDF
    const imgWidth = width * 0.3;
    const imgHeight = height * 0.3;
    const margin = 20; // Margen entre elementos
    const headerHeight = 100; // Altura reservada para el encabezado

    // Variables de posición
    let currentY = headerHeight;

    // Filtrar acompañantes según la condición
    const filteredAcompanist = guest.acompanist.filter(
      (acomp) => acomp?.asist === true
    );
    setTicketsConfirmados(filteredAcompanist);

    for (const [index, acomp] of filteredAcompanist.entries()) {
      if (currentY + imgHeight + margin > height) {
        pdf.addPage();
        currentY = headerHeight; // Restablecer la posición Y al comienzo de una nueva página
      }

      if (index === 0) {
        // Agregar el texto del h1 solo en la primera página
        pdf.setFontSize(28);
        pdf.text("Tickets", width / 2, 30, { align: "center" });

        // Agregar el texto del h2 solo en la primera página
        pdf.setFontSize(22);
        pdf.text(guest.principalName, width / 2, 60, { align: "center" });
      }

      // Agregar el texto del p
      pdf.setFontSize(16);
      pdf.text(acomp.name, width / 2, currentY, { align: "center" });

      const img = new Image();
      img.src = acomp.qrImage;

      // Esperar a que la imagen se cargue
      await new Promise((resolve) => {
        img.onload = () => {
          const x = (width - imgWidth) / 2; // Centrar horizontalmente
          const y = currentY + margin; // Espacio después del texto
          pdf.addImage(img, "PNG", x, y, imgWidth, imgHeight);
          currentY = y + imgHeight + margin; // Actualizar la posición Y
          resolve();
        };
      });
    }

    pdf.save("download.pdf");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const guestDocRef = doc(db, "people", id);
      await updateDoc(guestDocRef, {
        messageGuest: message,
      });
      alert("Mensaje enviado con éxito!");
    } catch (error) {
      console.error("Error al enviar el mensaje: ", error);
      alert("Error al enviar el mensaje");
    }
  };

  useEffect(() => {
    if (id) {
      fetchDataByGuest(id);
    }
    console.log(guest, "guest desde Tickets");
  }, [id]);

  useEffect(() => {
    if (guest) {
      const filteredAcompanist = guest.acompanist.filter(
        (acomp) => acomp?.asist === true
      );
      setTicketsConfirmados(filteredAcompanist);
    }
  }, [guest]);

  return (
    <div className="p-4">
      <h1 className="text-center font-paris font-gold display-4 mt-4 pt-4">
        {"Arturo & Noemi"}
      </h1>
      <p className="text-center display-5">Nuestra Boda</p>

      <div className="display-6 text-center my-4">
        ¡Gracias por ayudarnos a tener una mejor organización del evento! y
        gracias por ayudarnos a cumplir los requisitos de este.
      </div>
      {guest && ticketsConfirmados?.length != 0 && (
        <div className="w-100 justify-content-center d-flex align-items-center mb-4">
          <button className="btn-descargar" onClick={handleDownloadPdf}>
            Descargar Tickets{" "}
          </button>
        </div>
      )}
      <div className="mb-4">
        <p className="lead text-center ">
          Por favor, descarga tus tickets o toma una captura de pantalla para
          tenerlos a la mano, también puedes acceder a esta página desde el
          botón "ver mis pases" dentro de tu invitación. No los escanees los
          tickets antes del evento.
        </p>
        <div className="pb-4 d-flex justify-content-center align-items-center">
          <img loading="lazy" className="line" src={decoration} alt="linea" />
        </div>
        <p className="display-6 text-center ">
          Solo podrán ingresar las personas con ticket QR. Por lo tanto, te
          recomendamos que no compartas la invitación que es personalizada para
          ti, ni compartas esta página de tickets.
        </p>
      </div>

      <div className="justify-content-center mt-4" ref={printRef}>
        <p className="text-center font-paris display-4 mt-4 pt-4">
          {"Arturo & Noemi"}
        </p>
        {guest ? (
          <div className="text-center">
            <h2 className="font-paris font-gold">
              Tickets {guest?.principalName}
            </h2>
            <h3>Favor de no escanear con ningun dispositivo</h3>
            {guest.acompanist.map(
              (acomp, index) =>
                acomp?.asist === true && (
                  <div
                    key={index}
                    className="w-100 d-flex justify-content-center flex-column"
                  >
                    <p className="mb-0 display-6 mt-4">{acomp.name}</p>
                    <div className="d-flex justify-content-center">
                      <img
                        className="qr-images px-4 pb-4"
                        src={acomp.qrImage}
                        alt=""
                      />
                    </div>
                  </div>
                )
            )}
          </div>
        ) : (
          <p>No hay información disponible</p>
        )}
        <div>Deja un mensaje para nosotros</div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="message">Deja tu mensaje:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
    </div>
  );
};

export default Tickets;
