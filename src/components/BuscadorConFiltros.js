import React from "react";
import "../styles/BuscadorConFiltros.css";
import Select from "react-select";
import { tipoPropiedad } from "../dataBuscador/tipoPropiedad.js";
import { ubicacion } from "../dataBuscador/ubicacion.js";
import { dormitorios } from "../dataBuscador/dormitorios.js";
import { banos } from "../dataBuscador/banos.js";

const BuscadorConFiltros = () => {

  return (
    <div className="container buscadorConFiltros">
      <form className="buscadorForm">
        
        <label>Ubicacion:</label>
        <Select 
        options={ubicacion} 
        placeholder="Seleccionar" 
        />
        
        <label>Tipo de Propiedad:</label>
        <Select 
        options={tipoPropiedad} 
        placeholder="Seleccionar" />
       
        <label>Dormitorios:</label>
        <Select
        
        options={dormitorios} 
        placeholder="Seleccionar" 
        />
       
        <label>Banos</label>
        <Select options={banos} placeholder="Seleccionar"/>

        
        <label className="checkbox">
        <input className="buscadorCheckbox" type="checkbox"/>
        Garage
        </label>
        
      </form>
    </div>
  );
};

export default BuscadorConFiltros;
