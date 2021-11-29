import React from "react";
import CrudTableFila from "./crudTableFila";

const Crudtable = ({data, setDatoEditar, deleteRegistro})=>{
    return(
        <div>
            
            <h3>Tabla de datos</h3>

            <table>
                <tr>
                    <th>Producto</th>
                    <th>Tipo</th>
                    <th>Opciones</th>
                </tr>
                <tbody>
                    {data.length>0?

                        (data.map((el)=>(<CrudTableFila 
                        key={el.id} 
                        el={el} 
                        setDatoEditar={setDatoEditar}
                        deleteRegistro={deleteRegistro}
                        />
                        ))
                    ):(
                        <tr>
                            <td colSpan="3">Sin datos </td> 
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Crudtable;