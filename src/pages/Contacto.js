import React from 'react'
import { useForm } from 'react-hook-form'
import "../styles/Contacto.css"

const Contacto = () => {

    const { register, formState: {errors} , handleSubmit } = useForm()

const enviarDatos = (data) =>{

    console.log (data)

}

  return (
    <form onSubmit={handleSubmit(enviarDatos)} className='container formContacto'>
      <div>
        <div>
            <label>Nombre</label>
            <input type="text" {...register("nombre",{
                required: true,
                maxLength: 10
            })}/>
            {errors.nombre?.type === "required" && <p>El campo es requerido</p>}
            {errors.nombre?.type === "maxLength" && <p>Max 10 caracteres</p>} 
        </div>
        <div>
            <label>Direccion</label>
            <input type="text" {...register("direccion")}/>
        </div>
        <div>
            <label>Mail</label>
            <input type="text" {...register("mail", {
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
            })}/>
         {errors.mail?.type === "pattern" && <p>el formato es incorrecto</p>} 
        </div>
        <div>
            <label>Edad</label>
            <input type="text"{...register("edad")}/>
        </div>
        <div>
            <label>Pais</label>
           <select {...register("pais")}>
            <option value="uy">Uruguay</option>
            <option value="es">España</option>
            <option value="it">Italia</option>
            <option value="fr">Francia</option>
           </select>
        </div>

        <input type='submit' value="Enviar"/>
        </div>
    </form>
  )
}

export default Contacto