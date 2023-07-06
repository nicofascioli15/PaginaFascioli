
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Venta from "./pages/Venta"
import Alquiler from "./pages/Alquiler"
import Contacto from "./pages/Contacto"




const App = () => {

return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="venta" element={<Venta/>}/>
            <Route path="alquiler" element={<Alquiler/>}/>
            <Route path="contacto" element={<Contacto/>}/>
            



            </Route>
        </Routes>
    
    </BrowserRouter>
   
    </>


)
}

export default App