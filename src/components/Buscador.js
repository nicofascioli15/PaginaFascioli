import Select from "react-select"
import {operacion} from "../dataBuscador/operacion.js"
import {tipoPropiedad} from "../dataBuscador/tipoPropiedad.js"
import {ubicacion} from "../dataBuscador/ubicacion.js"
import {dormitorios} from "../dataBuscador/dormitorios.js"
import {banos} from "../dataBuscador/banos.js"

const Buscador = () => {


    
    return (
        <>
        <div className="buscador container">
            <aside>
                <form>
                    <label>Referencia</label>
                    <input placeholder="FAV12345"></input>
                   
                    <label>Tipo de Negocio</label>
                    <Select
                    options={operacion}
                    placeholder="Seleccionar"/>


                    <label>Tipo de Propiedad</label>
                    <Select
                    options={tipoPropiedad}
                    placeholder="Seleccionar"/>

                    <label>Ubicacion</label>
                    <Select
                    options = {ubicacion}
                    placeholder="Seleccionar"/>

                    <label>Dormitorios</label>
                    <Select
                    options={dormitorios}
                    placeholder="Seleccionar"/>

                    <label>Banos</label>
                    <Select
                    options={banos}
                    placeholder="Seleccionar"/>

                    <label>Garage</label>
                    <Select
                    placeholder="Seleccionar"/>

                    <div className="alertSerch">
                        <span><a href="#">Crear alerta de busqueda</a></span>
                        <span className="answer">?</span>
                    </div>

                    <button type="submit">Buscar</button>

                </form>

            </aside>
        </div>
        </>
    )
}

export default Buscador