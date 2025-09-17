import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useGuest } from "../../Context/GuestContext";
import lineDecoration from "../../assets/img/linea3.png";

const DataPage = () => {
  const [data, setData] = useState();
  const [onLoadData, setOnLoadData] = useState(false);
  const { eventData } = useGuest();

  const fetchDataSaveTheDate = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "people"));
      const people = [];
      querySnapshot.forEach((doc) => {
        const data = JSON.parse(JSON.stringify(doc.data(), null, 2));
        people.push(data);
      });
      people.sort((a, b) => new Date(b.date) - new Date(a.date));
      setData(people);
      setOnLoadData(true);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setOnLoadData(false);
    }
  };

  useEffect(() => {
    fetchDataSaveTheDate();
  }, []);

  async function exportToCSV() {
    try {
      const querySnapshot = await getDocs(collection(db, "people"));
      const rows = [];

      // Encabezados
      rows.push([
        "No",
        "Fecha registro",
        "Tickets",
        "Nombre",
        "Acompañante(s)",
        "Mensaje",
        "Teléfono",
      ]);

      // Guardar documentos con sus fechas en un arreglo
      const docs = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        docs.push({ id: doc.id, ...data });
      });

      // Ordenar por fecha ascendente (más antigua primero)
      docs.sort((a, b) => new Date(b.date) - new Date(a.date));

      // Crear filas CSV ya ordenadas
      docs.forEach((data, index) => {
        const fecha = data.date
          ? new Date(data.date).toLocaleDateString("es-MX")
          : "";

        const acompanist = Array.isArray(data.acompanist)
          ? data.acompanist.join(", ")
          : data.acompanist || "";

        rows.push([
          index + 1,
          fecha,
          data.tickets || "",
          data.name || "",
          acompanist,
          data.message || "",
          `'${data.phone || ""}'`, // mantener ceros
        ]);
      });

      const csvContent = rows
        .map((row) =>
          row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")
        )
        .join("\n");

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `registro-invitados-${eventData.bride}-y-${eventData.groom}-nuestra-boda.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error al exportar CSV:", error);
      alert("Ocurrió un error al generar el archivo.");
    }
  }

  return (
    <div className="p-4 text-center">
      <h3 className="text-center mt-4">Arlet & Homero</h3>
      <p className="lead"> Nuestra Boda</p>
      <div className="d-flex justify-content-around align-items-center">
        <img
          className="decoration  rotate-10"
          src={lineDecoration}
          alt="linea"
        />
      </div>
      <p className="display-4 font-paris mb-0">
        Lista de Invitados Registrados
      </p>
      <div className="d-flex justify-content-around align-items-center">
        <img
          className="decoration  rotate-180"
          src={lineDecoration}
          alt="linea"
        />
      </div>
      {onLoadData && (
        <button className="btn-descargar my-4" onClick={exportToCSV}>
          Descargar Tabla
        </button>
      )}

      <div className="desktop-none text-start mb-1">
        Desliza sobre la tabla hacia la izquierda para ver toda la tabla
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">No.</th>
              <th className="border border-gray-300 px-4 py-2">
                Fecha de Registro
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Tickets recibidos
              </th>
              <th className="border border-gray-300 px-4 py-2">Nombre</th>
              <th className="border border-gray-300 px-4 py-2">Acompañante</th>
              <th className="border border-gray-300 px-4 py-2">Mensaje</th>
              <th className="border border-gray-300 px-4 py-2">Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <>
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    {index + 1}
                  </td>

                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(item.date).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.tickets}
                  </td>

                  <td className="border border-gray-300 px-4 py-2">
                    {item.name}
                  </td>
                  {item.acompanist &&
                  Array.isArray(item.acompanist) &&
                  item.acompanist.length > 0 ? (
                    <td className="border border-gray-300 px-4 py-2">
                      {item.acompanist.join(", ")}
                    </td>
                  ) : (
                    <td className="text-center"> {item.acompanist} </td>
                  )}
                  <td className="border border-gray-300 px-4 py-2">
                    {item.message}
                  </td>

                  <td className="border border-gray-300 px-4 py-2">
                    {item.phone}
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">DIGITAL INVITE BY ESMERALDA</div>
    </div>
  );
};

export default DataPage;
