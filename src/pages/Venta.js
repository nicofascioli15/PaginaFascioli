import propiedades from "../data";
import "../styles/venta.css"

const Venta = () => {







  return (
    <div className="container">
      <h3 className="tituloVenta">Propiedades en Venta</h3>
      <section className=" is-flex flex-wrap sectiongap">
        {propiedades.map((dato) => {
          return (
            <article key={dato.id}>
            <div  className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={dato.imagen} alt="Placeholder image" />
                </figure>
              </div>
              <div className="card-content">
                <h2>{dato.titulo}</h2>
                <div className="content">
                  {dato.descripcion}
                  <br />
                </div>
              </div>
            </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Venta;
