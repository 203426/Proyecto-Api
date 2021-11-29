import React,{useState} from 'react';
import CrudForm from './crudForm';
import Crudtable from './crudTable';

const datos = [
    {id:1, product:"Expresso", type:"Helado Americano"},
    {id:2, product:"Expresso", type:"Expresso"},
    {id:3, product:"Expresso", type:"Helado Latte"},
    {id:4, product:"Expresso", type:"Caramel Macciatto"}
];

const CruddApp=()=>{
    const [db,setDb]=useState(datos);
    const [datoEditar, setDatoEditar]=useState(null);

    const agregarRegistro=(data)=>{
        data.id=Date.now();
        setDb([...db,data]);

    }
    const updateData=(data)=>{
        let newDato=db.map(el=>el.id===data.id?data:el);
        setDb(newDato);
    };
    const deleteRegistro=(id)=>{
        let borrar=window.confirm(
            `¿estas seguro de eliminar $(id)?`
        );

        if(borrar){
            let nuevoDato=db.filter((el)=>el.id !==id);
            setDb(nuevoDato)
        }else{
            return;
        }
    };  



    return(
        <div>
            <h2>Ajustes</h2>

            <CrudForm
                agregarRegistro={agregarRegistro}
                updateData={updateData}
                datoEditar={datoEditar}
                setDatoEditar={setDatoEditar}
            />
            <Crudtable 
            data={db}
            setDatoEditar={setDatoEditar}
            deleteRegistro={deleteRegistro}
            />

        </div>
    )
}
export default CruddApp;