import React from 'react'
import { Link } from 'react-router-dom'
import line from "../../assets/img/lineaalreves.png"
import line2 from "../../assets/img/line2.png"

const HomePage = () => {
  return (
   <div className='d-flex justify-content-center'>
    <div className='container-1 p-4'>
        <h2 className='text-center'>DEMO 2 PAQUETE PLATINO</h2>
        <p className='mb-0 lead display-6 p-0 text-center '>Queridos novios, en tu paquete platino recibirás 6 URL, es decir, 6 invitaciones.</p>
        <p className=' display-6 p-0 text-center'>Este es 1 demo que incluye 6 url. A continuación, te mostramos cada una:</p>
        <div className='d-flex w-100 mb-3 justify-content-center'>
        <img src={line} className='w-75' alt="" />
        </div>
        <p className='mb-0 display-6 p-0 font-pari'>URL 1</p>
        <p className='mb-1 lead'>Esta invitación la repartirás a aquellos invitados que van a ir solos porque solo contempla el registro para 1 persona:</p>
        <Link className='mb-4 display-6 p-0' to="https://muestra-platino-portada.netlify.app/1">Ver invitación (url) 1 </Link>

        <p className='mb-0 mt-4 display-6 p-0 font-pari'>URL 2</p>
        <p className='mb-1 lead'>Esta invitación la repartirás a aquellos invitados que van a ir en pareja o que tienen un acompañante porque esta invitación contempla el registro para 2 personas</p>
        <Link className='mb-4 display-6 p-0' to={"https://muestra-platino-portada.netlify.app/2"}>Ver invitación (url) 2 </Link>

        <p className='mb-0 mt-4 display-6 p-0 font-pari'>URL 3</p>
        <p className='mb-1 lead'>Esta invitación la repartirás a aquellos invitados que tienen una familia o grupo de 3 personas porque contempla el registro para 3 personas</p>
        <Link className='mb-4 display-6 p-0' to={"https://muestra-platino-portada.netlify.app/3"}>Ver invitación (url) 3</Link>

        <p className='mb-0 mt-4 display-6 p-0 font-pari'>URL 4</p>
        <p className='mb-1 lead'>Esta invitación la repartirás a aquellos invitados que tienen una familia o grupo de 4 personas porque contempla el registro para 4 personas</p>
        <Link className='mb-4 display-6 p-0' to={"https://muestra-platino-portada.netlify.app/4"}>Ver invitación (url) 4</Link>

        <p className='mb-0 mt-4 display-6 p-0 font-pari'>URL 5</p>
        <p className='mb-1 lead'>Esta invitación la repartirás a aquellos invitados que tienen una familia o grupo de 5 personas porque contempla el registro para 5 personas</p>
          <Link className='mb-4 display-6 p-0' to={"https://muestra-platino-portada.netlify.app/5"}>Ver invitación (url) 5</Link>

        <p className='mb-0 mt-4 display-6 p-0 font-pari'>URL 6</p>
        <p className='mb-1 lead'>Esta invitación la repartirás a aquellos invitados que tienen una familia o grupo de 6 personas porque contempla el registro para 6 personas</p>
        <Link className='mb-4 display-6 p-0' to={"https://muestra-platino-portada.netlify.app/6"}>Ver invitación (url) 5</Link>

        <p className='mb-0 mt-4 display-6 p-0 font-pari'>Panel de Control</p>
        <p className='mb-1 lead'>En este panel de control que solo tendrán ustedes los novios, verán el registro de las personas y las respuestas de los formularios dentro de cada invitación. Dentro del formulario que trae cada invitación, se les pide a los invitados que escriban su número de teléfono al cuál les llegó su invitación. Esta es una manera de comprobar que es un invitado legítimo y no alguien más que se está registrando. Además se les recuerda que su registro es válido solo si recibieron la invitación de parte de ustedes (los novios) o de parte de su wedding planner.</p>
        <Link className='mb-4  display-6 p-0' to={"https://muestra-platino-portada.netlify.app/data-page"}>Ver página de registro</Link>
        <div className='d-flex w-100 mt-4 mb-4 pt-2 justify-content-center'>
        <img src={line2} className='w-75' alt="" />
        </div>
    </div>
    </div>  )
}

export default HomePage