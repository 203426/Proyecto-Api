import React,{useState,useEffect} from "react";

const initialForm={
    nombre: "",
    num: "",
    id:null,
};


const CrudForm= ({agregarRegistro, updateData, datoEditar, setDatoEditar})=>{
    const [form, setform]=useState(initialForm);

    useEffect(()=>{
        if(datoEditar){
            setform(datoEditar);
        }else{
            setform(initialForm)
        }

    }, [datoEditar]);

    const handleChange = (e) =>{
        setform({...form,[e.target.name]:e.target.value,});
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!form.nombre || !form.num){
            alert("Favor de ingresar los dos datos en la caja de productos y tipo")
            return;
        }

        if(form.id===null){
            agregarRegistro(form);
        }else{
            updateData(form);
        }

        handleReset();
    };


    const handleReset = (e) =>{
        setform(initialForm);
        setDatoEditar(null);
    };

    return(
        <div>
            <h3>¡Manda tu información y contactate con nosotros!</h3>
            <form class="form" onSubmit={handleSubmit}>
                <label>
                    Nombre de contacto
                    <span></span>
                </label>
                <input
                type="text"
                name="nombre"
                placeholder="Ingresa tu nombre "
                onChange={handleChange}
                value={form.nombre}/>
                <label>
                    Ingresa el numero de contacto
                    <span></span>
                </label>
                <input
                type="text"
                name="num"
                placeholder="Ingresa tu numero telefonico"
                onChange={handleChange}
                value={form.num}/>

                <button type="submit" class="boton-submit">Enviar</button>
                <button type="reset" class="boton-submit" onClick={handleReset}>Limpiar</button>

            </form>
        
        </div>
    );
};
export default CrudForm;
