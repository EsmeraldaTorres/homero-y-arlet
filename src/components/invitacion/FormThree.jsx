import React, { useState, useEffect, useRef} from "react";
import { db, storage} from "../../firebase";
import { Link } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, } from "firebase/firestore";
import { Spinner } from "react-bootstrap";
import { motion } from "framer-motion"; // Importa Framer Motion
import lineDecoration from "../../assets/img/line2.png"
import AddToGoogleCalendar from "./AddToGoogleCalendar";
import AddToMobileCalendar from "./AddToMobileCalendar";

const FormThree = ({num}) => {
    const [formData, setFormData] = useState({
        name: "",
        message: "",
        phone: "",
        acompanist: "",
        instagram: "",
        fotoInstagram: "",
        tickets: num,
      });
    const [checkbox, setCheckbox] = useState(false)
    const [acompanist, setAcompanist] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [send, setSend] = useState(false)
    const [submitted, setSubmitted] = useState(false);
    const [acompanante, setAcompanante] = useState(""); // "si", "no" o ""
    const mensajeRef = useRef(null);
    const spinnerRef = useRef(null);

    const handleInputChange = (index, value) => {
        const newAcompanist = [...formData.acompanist]; 
        newAcompanist[index] = value; // Actualiza el valor en la posición correspondiente
        setFormData({ ...formData, acompanist: newAcompanist });
      };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSend(true)
        spinnerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

        setTimeout(() => {
          setIsSubmitting(true);
        }, 500); // Simulación de carga

        try {
              const docRef = await addDoc(collection(db, "save-the-date"), { 
                ...formData, 
                date: new Date().toISOString() // Guarda la fecha y hora actual
                });

              setTimeout(() => {
                setIsSubmitting(false);
                setSubmitted(true); // Muestra el mensaje de éxito
              }, 1000); // Simulación de carga
              

        } catch (error) {
          console.error("Error adding document: ", error);
        }        

      };

      useEffect(()=>{
console.log(acompanist, "acompanist")
      },[acompanist])

      useEffect(() => {
        if (submitted && mensajeRef.current) {
          mensajeRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, [submitted]);

  return (
  <div className="d-flex justify-content-center container-1"> 
            {!isSubmitting && !submitted && 
    <form action="" onSubmit={handleSubmit} className={`animate__animated p-1 ${send && "animate__zoomOut"}`}>
            <p className="mb-0  display-5 font-paris">Nombre Completo:</p>
            <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-100 p-2" 
                id="1"         
                required
                placeholder="Tu nombre completo aquí"
            />
            <div>
            <p className="mb-0  display-5 font-paris mt-4"> Escribe el nombre completo de {num - 1} acompañantes:</p>

            {/* <p className="mt-4 mb-0 lead">¿Te acompañará alguien especial?</p> */}
            <div className="mt-0">
                <div className="d-flex justify-content-center">


      </div>
                <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }} // Empieza pequeño y transparente
                animate={{ opacity: 1, scale: 1 }} // Hace zoom hacia afuera y aparece
                exit={{ opacity: 0, scale: 0.8 }} // Se oculta haciendo zoom hacia adentro
                transition={{ duration: 0.4, ease: "easeOut" }} // Duración de la animación
              >
        <div className="text-center">
          {/* <label className="lead">Nombre:</label> */}
          {Array.from({ length: num -  1 }).map((_, index) => (
      <input
        key={index}
        type="text"
        className="w-100 p-2 mb-3 mt-0"
        placeholder={`Nombre de acompañante ${index + 1}`}
        value={formData.acompanist[index] || ""} // Evita valores undefined
        onChange={(e) => handleInputChange(index, e.target.value)}
        required={acompanante === "si"}
      />
    ))}
        </div>
        </motion.div>
 {/* )} */}
        {/* Segunda pregunta si el usuario responde "No" */}
        {acompanante === "no" && (                                    <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }} // Empieza pequeño y transparente
                animate={{ opacity: 1, scale: 1 }} // Hace zoom hacia afuera y aparece
                exit={{ opacity: 0, scale: 0.8 }} // Se oculta haciendo zoom hacia adentro
                transition={{ duration: 0.4, ease: "easeOut" }} // Duración de la animación
              >
       
        <div>


        </div>
    </motion.div>  )}
                {acompanist &&
                    <div className={`mt-1 animate__animated ${acompanist ? "animate__zoomIn" : "animate__zoomOut"}`}>         
                        <input 
                        type="text" 
                        name="food" 
                        value={formData.food}
                        onChange={(e) => setFormData({...formData, acompanist: e.target.value})}
                        id="2" 
                        className="w-100 p-2 " 
                        placeholder="Nombre"/>
                    </div>
                }
            </div>
            <div>

                {acompanist === false &&
                    <div className={`mt-1 animate__animated ${acompanist === false ? "animate__zoomIn" : "animate__zoomOut"}`}>         
                        <input 
                        type="text" 
                        name="food" 
                        value={formData.food}
                        onChange={(e) => setFormData({...formData, acompanist: e.target.value})}
                        id="2" 
                        className="w-100 p-2" 
                        placeholder="Nombre"/>
                    </div>
                }
            </div>
                   
            </div>
            {/* <div>
            <div className='d-flex justify-content-center my-4'>
            <img src={lineDecoration} alt="" className='decoration rotate-180'/></div>
            <p className="mt-3 mb-0 lead">¿Tienen alguna preferencia de menú o restricción alimentaria?</p>
            <div>
            <div className="d-flex w-100 justify-content-center">
                  <div className="checkbox-wrapper-25 lead text-center d-flex justify-content-center">
          <input
            type="checkbox"
            id="checkbox-si-5"
            className=" "
            checked={checkbox === "si"}
            onChange={() => setCheckbox("si")} 
            />
          <label htmlFor="checkbox-si-5" className="m-2">
            <span></span>Sí
          </label>
                  </div>
                  <div className="checkbox-wrapper-24">
                        <input
                            type="checkbox"
                            id="checkbox-no-5"
                            checked={checkbox === "no"}
                            onChange={() => setCheckbox("no")}
                        />
                        <label htmlFor="checkbox-no-5" className="mt-2 lead">
                            <span></span>No
                        </label>
                  </div>
                </div>


                {checkbox === "si" &&
                           <motion.div
                           className="text-center"
                           initial={{ opacity: 0, scale: 0.8 }} // Empieza pequeño y transparente
                           animate={{ opacity: 1, scale: 1 }} // Hace zoom hacia afuera y aparece
                           exit={{ opacity: 0, scale: 0.8 }} // Se oculta haciendo zoom hacia adentro
                           transition={{ duration: 0.4, ease: "easeOut" }} // Duración de la animación
                         >
                    <div className={`mt-1 animate__animated ${checkbox ? "animate__zoomIn" : "animate__zoomOut"}`}>         
                        <input 
                        type="text" 
                        name="food" 
                        value={formData.food}
                        onChange={(e) => setFormData({...formData, food: e.target.value})}
                        id="2" 
                        required={checkbox}
                        className="w-100 p-2" 
                        placeholder="Escribe aquí"/>
                    </div></motion.div>
                }
                </div>
            </div> */}
            <div className={`mt-4 animate__animated animate__zoomIn`}>  
            <p className="mb-0 display-5 font-paris">Escribe aquí tus buenos deseos para nosotros: </p>       
                        <textarea 
                        type="text" 
                        name="message" 
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        id="2" 
                        required={false}
                        className="w-100 p-2 input" 
                        placeholder="Tu mensaje aquí"/>
                    </div>
            <div className="mt-4">
            <p className="mb-0 display-5 font-paris">Tu número de teléfono al cual te enviamos esta invitación:
                </p>
                <input
                 type="number"  
                 name="phone" 
                 className="p-2 w-100" 
                 value={formData.phone}
                 onChange={(e) => setFormData({...formData, phone: e.target.value})}
                 required
                 placeholder="Tu celular aquí"
                 id="3"/>
            </div>
            <div className="mt-4 d-flex justify-content-center">
                <button type="submit" className="w-100 btn-enviar lead ">Enviar</button>
            </div>
    </form> }

            {/* 🔄 Círculo de carga */}
            {isSubmitting && (
                <div ref={spinnerRef}  className="loading-container animate__animated animate__zoomIn d-flex flex-column justify-content-center align-items-center">
                    <Spinner animation="border" color="gray" />
                </div>
            )}

            {/* ✅ Mensaje de éxito */}
            {submitted && (
               <div ref={mensajeRef} className="success-message d-flex flex-column justify-content-center align-items-center text-center animate__animated  animate__bounce">
               <div className='d-flex justify-content-center my-4'>
               <img src={lineDecoration} alt="" className='decoration'/></div>
               <h2 className="font-paris mt-3 title2">¡Gracias por darnos el Sí!</h2>

{
  formData.acompanist != "" ? 
  <>
  <p className="lead">{formData.acompanist.join(", ")} & {formData.name}   han quedado registrados como invitados a nuestra boda.</p>
  </> : 
           <p className="lead">{formData.name}haz quedado registrado como invitado a nuestra boda.</p>

}           <div className="text-center d-flex lead flex-column">
               Agenda nuestro evento en tus calendarios 
                       <AddToGoogleCalendar />
                       <AddToMobileCalendar />
                     </div>
           {/* <p className="lead">Recuerda que tu registro es válido si esta invitación la recibes de parte de Arturo o Noemí.</p> */}
           <div >
                              <p className="color-in text-center mb-0"> (Este mensaje no aparecerá en tu invitación.) Para ver el funcionamiento del registro de asistencia den click en el siguiente enlace: </p>
                              <Link to="/data-page">
                        Ir a página de registro
                        </Link> 
                        </div>
       </div>
            )}
    </div> 
    )

}

export default FormThree;