import React,{ useEffect,useState} from 'react';
import { helpHttp }from '../helpers/helpHttp';
import CrudForm from './crudForm';
import Crudtable from './crudTable';
import Loader from './Loader';
import Message from './Message';


const CrudApi=()=>{
    const [db,setDb]=useState(null);
    const [datoEditar, setDatoEditar]=useState(null);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(null);

    let api=helpHttp();

    let url="http://localhost:5000/productos";

    useEffect(()=>{
        helpHttp().get(url).then((res)=>{
            setLoading(true)
            console.log(res);
            if(!res.err){
                setDb(res);
                setError(null)
            }else{
                setDb(null)
                setError(res)
            }
            setLoading(false)
        });
    },[url]);

    const agregarRegistro=(data)=>{
        data.id=Date.now();
        let options ={
            body:data,
            headers:{"content-type":"application/json"}
        }

        api.post(url,options).then((res)=>{

            console.log(res);
            if(!res.err){
                setDb([...db,res])
            }else{
                setDb(res)
            }
        })    
        setDb([...db,data]);

    }


    const updateData=(data)=>{
        let endpoint=`${url}/${data.id}`;
        console.log(endpoint);
        let options ={
            body:data,
            headers:{"content-type":"application/json"}
        }

        api.put(endpoint,options).then((res)=>{

            //console.log(res);
            if(!res.err){
                let nuevoDato=db.map((el)=>(el.id===data.id?data:el))
                setDb(nuevoDato)
            }else{
                setDb(res)
            }
        })    
        //setDb([...db,data]);
        //let newDato=db.map((el)=>el.id===data.id?data:el);
        //setDb(newDato);
    };
    const deleteRegistro=(id)=>{
        let borrar=window.confirm(
            `¿estas seguro de eliminar $(el.id)?`
        );

        if(borrar){
            let endpoint=`${url}/${id}`;
            let options ={
                headers:{"content-type":"application/json"}
            }

            api.del(endpoint,options).then((res)=>{

                //console.log(res);
                if(!res.err){
                    let nuevoDato=db.filter((el)=>el.id !==id);
                    setDb(nuevoDato)
                }else{
                    setDb(res)
                }
            })
            //let nuevoDato=db.filter((el)=>el.id !==id);
            //setDb(nuevoDato)
        }else{
            return;
        }
    };  



    return(
        <div>
            <h2>Api</h2>

            <CrudForm
                agregarRegistro={agregarRegistro}
                updateData={updateData}
                datoEditar={datoEditar}
                setDatoEditar={setDatoEditar}
            />

            {loading&&<Loader/>}
            {error&&<Message
                msg={`Error ${error.status}:${error.statusText}`}
                bgColor="#adc3545"
            />}
            {db&&<Crudtable 
            data={db}
            setDatoEditar={setDatoEditar}
            deleteRegistro={deleteRegistro}
            />}

        </div>
    )
}
export default CrudApi;