
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import AlquilerPropiedades from "./pages/AlquilerPropiedades"
import Contacto from "./pages/Contacto"
import DetallesPropiedad from "./pages/DetallesPropiedad"
import Error from "./pages/Error"
import VentaPropiedades from "./pages/VentaPropiedades"




const App = () => {

return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="venta" element={<VentaPropiedades/>}/>
            <Route path="venta/:idPropiedad" element={<DetallesPropiedad/>}/>
            <Route path="alquiler" element={<AlquilerPropiedades/>}/>
            <Route path="alquiler/:idPropiedad" element={<DetallesPropiedad/>}/>
            <Route path="contacto" element={<Contacto/>}/>
            <Route path="*" element={<Error/>}/>
            </Route>
        </Routes>
    
    </BrowserRouter>
   
    </>


)
}

export default App