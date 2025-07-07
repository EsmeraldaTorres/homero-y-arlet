import React, { useState, useEffect,  useRef } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import Form from 'react-bootstrap/Form';
import { Spinner } from "react-bootstrap";
import lineDecoration from "../../assets/img/line2.png"
import { Link } from "react-router-dom";
import AddToGoogleCalendar from "./AddToGoogleCalendar";
import AddToMobileCalendar from "./AddToMobileCalendar";
const FormOne = () => {
    const [formData, setFormData] = useState({
        name: "",
        food: "",
        phone: "",
        message: "",
        tickets:"1",
      });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [send, setSend] = useState(false)
    const [submitted, setSubmitted] = useState(false);
    const [acompanante, setAcompanante] = useState(""); // "si", "no" o ""
    const mensajeRef = useRef(null);
    const spinnerRef = useRef(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormData({...formData, food: acompanante})
        setSend(true)
        spinnerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

        setTimeout(() => {
          setIsSubmitting(true);

        }, 500); // Simulación de carga
        console.log(formData, "formData")
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

      const handleAcompananteChange = (value) => {
        if (acompanante === value) {
          setAcompanante(""); // Si vuelve a hacer click, deselecciona
        } else {
          setAcompanante(value);
        }
      };

      useEffect(() => {
        if (submitted && mensajeRef.current) {
          mensajeRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, [submitted]);

  return (
  <div className="d-flex flex-column justify-content-center container-1"> 

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
          
            </div>
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
                <button type="submit" className="w-100 btn-enviar lead font-ep">Enviar</button>
            </div>
            <p className="mt-4 text-center mb-0 lead">Este registro sólo es válido si Arturo o Noemí te enviamos esta invitación por mensaje.</p>

    </form> }

            {/* 🔄 Círculo de carga */}
            {isSubmitting && (
                <div   ref={spinnerRef}
                className="loading-container animate__animated animate__zoomIn d-flex flex-column justify-content-center align-items-center">
                    <Spinner animation="border" color="gray" />
                </div>
            )}

            {/* ✅ Mensaje de éxito */}
            {submitted && (
                <div ref={mensajeRef} className="success-message d-flex flex-column justify-content-center align-items-center text-center animate__animated  animate__bounce">
                        <div className='d-flex justify-content-center my-4'>
                        <img src={lineDecoration} alt="" className='decoration'/></div>
                    <h2 className="font-paris mt-3 title2">¡Gracias por darnos el Sí!</h2>
                    <p className="lead">{formData.name}, haz quedado registrado como invitado a nuestra boda. </p>
                    <div className="text-center d-flex lead flex-column">
                        Agenda nuestro evento en tus calendarios 
                                <AddToGoogleCalendar />
                                <AddToMobileCalendar />
                              </div>
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

export default FormOne