
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Alquiler from "./pages/Alquiler"
import Contacto from "./pages/Contacto"
import Propiedad from "./pages/Propiedad"
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
            <Route path="venta/:idPropiedad" element={<Propiedad/>}/>
            <Route path="alquiler" element={<Alquiler/>}/>
            <Route path="contacto" element={<Contacto/>}/>
            <Route path="*" element={<Error/>}/>
            </Route>
        </Routes>
    
    </BrowserRouter>
   
    </>


)
}

export default App