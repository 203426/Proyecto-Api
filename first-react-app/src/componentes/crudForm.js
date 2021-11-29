import React,{useState,useEffect} from "react";

const initialForm={
    product: "",
    type: "",
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
        if(!form.product || !form.type){
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
            <h3>Agregar</h3>
            <form class="form" onSubmit={handleSubmit}>
                <label>
                    Producto
                    <span></span>
                </label>
                <input
                type="text"
                name="product"
                placeholder="Producto"
                onChange={handleChange}
                value={form.product}/>
                <label>
                    Tipo
                    <span></span>
                </label>
                <input
                type="text"
                name="type"
                placeholder="Tipo"
                onChange={handleChange}
                value={form.type}/>

                <button type="submit" class="boton-submit">Enviar</button>
                <button type="reset" class="boton-submit" onClick={handleReset}>Limpiar</button>

            </form>
        
        </div>
    );
};
export default CrudForm;
