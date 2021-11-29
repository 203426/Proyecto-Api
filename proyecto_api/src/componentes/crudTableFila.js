import React from "react";

const CrudTableFila=({el, setDatoEditar, deleteRegistro})=>{
    let{nombre,num,id}=el;
    return (
    
        <tr>
            <td>{nombre}</td>
            <td>{num}</td>
            <td>
                <div class="contenedor">
                    <button id="button1" onClick={()=>setDatoEditar(el)}>Editar</button>
                    <button id="button2" onClick={()=>deleteRegistro(id)}>Eliminar</button>
                </div>
            </td>
        </tr>
    )
}


export default CrudTableFila;