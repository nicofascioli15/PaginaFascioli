import { Link } from "react-router-dom"
import "../styles/App.css"

const NavBar = () => {
    return (
        <>
        <div className=" navBarHeader container">
            <Link className="prueba" to="/" href="#"><img src="https://www.fascioli.com.uy/packs/media/src/assets/Images/LogoOriginalFascioli-5b0386462f996cc71b46755ec26f2674.png" alt="LogoEmpresa"/></Link>
            <nav className="navbar" >
                <ul className="container">
                   <li><Link className="prueba" to="/">Inicio</Link></li>
                   <li><Link className="prueba" to="venta">En Venta</Link></li>
                   <li><Link className="prueba" to="alquiler">En Alquiler</Link></li>
                   <li><Link className="prueba" to="contacto">Contacto</Link></li>                   
                </ul>
            </nav>
        </div>

        </>
    )
}

export default NavBar