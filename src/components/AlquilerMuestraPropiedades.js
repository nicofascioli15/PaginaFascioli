import propiedades from "../data";
import "../styles/muestraPropiedades.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBath,faRulerCombined,faCar } from '@fortawesome/free-solid-svg-icons'


const AlquilerMuestraPropiedades = () => {



  const propiedadesAlaVenta = propiedades.filter(propiedad => propiedad.operacion == "Alquiler")


    return (
        <div className="container">
          <h3 className="propiedadTitulo">PROPIEDADES EN ALQUILER</h3>
          <section className=" is-flex flex-wrap sectiongap">
            {propiedadesAlaVenta.map((dato) => {
              return (
                <article key={dato.id}>
                <div  className="card">
                  <Link to="/alquiler/:idPropiedad" className="card-image propiedadCardImagen">
                    <figure className="image is-4by3">
                      <img src={dato.imagen} alt="Placeholder image" />
                      <span className="propiedadOperacion">{dato.operacion}</span>
                    </figure>
                  </Link>
                  <div className="card-content">
                    <div className="tituloRef">
                      <h2 className="tituloPropiedad">{dato.titulo}</h2>
                      <p>Ref. {dato.id}</p>
                    </div>
                    <div> 
                      <p>{dato.barrio}, {dato.ciudad}</p>
                      </div>
                    <div className="content propiedadPrecio">
                      <p>{dato.moneda} {dato.precio}</p>
                    </div>
                    <div className="propiedadCaracteristicas">
                      <p className="icono"><FontAwesomeIcon icon={faBed} /> {dato.dormitorios}</p>
                      <p className="icono" ><FontAwesomeIcon icon={faBath} />{dato.banos}</p>
                      <p className="icono"><FontAwesomeIcon icon={faRulerCombined} /> {dato.superficie} mts2</p>
                      <p className="icono" ><FontAwesomeIcon icon={faCar} /> {dato.garage}</p>
                    </div>
                  </div>
                  <Link to="/alquiler/:idPropiedad" className="propiedadDetalles">Ver Detalles</Link>
                </div>
                </article>
              );
            })}
          </section>
        </div>
      );
}

export default AlquilerMuestraPropiedades