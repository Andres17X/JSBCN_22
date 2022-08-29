
import { useState, useEffect } from "react";


function Alumnes() {

    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [poblacion, setPoblacion] = useState("");
    const [cpostal, setCpostal] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [dades, setDades] = useState([]);
    const [error, setError] = useState("");

    function loadData(){
        fetch("http://localhost:3001/api/clientes")
        .then(resultat => resultat.json())
        .then(objecte_retornat => {
            if (objecte_retornat.ok === true) {
                setDades(objecte_retornat.data);
            } else {
                setError(objecte_retornat.error)
            }
        })
        .catch(error => setError(error))
    }

    function elimina(id){
        console.log("em demanen que esborri el id "+id);

        fetch("http://localhost:3000/api/clientes/"+id,
        {
            method: "DELETE",
        })
        .then(res => loadData())
        .catch(err => console.log("error: ", err))

    }


    function desar(e){

        e.preventDefault();
        const al = {
            nombre: nombre,
            direccion: direccion,
            poblacion: poblacion,
            cpostal: cpostal,
            email: email,
            password: password
        }

        fetch("http://localhost:3001/api/clientes",
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(al)
        })
        .then(res => loadData())
        .catch(err => console.log("error: ", err))

    }

    useEffect(() => {

       loadData();

    }, [])


    if (error !== "") {
        return <h3>Error: {error} </h3>
    }

    if (dades.length === 0) {
        return <h3>No hi ha dades</h3>
    }

    const lis = dades.map(el => <li key={el.id}>{el.nombre} {el.direccion} {el.poblacion} {el.cpostal} {el.email} {el.password} <button onClick={()=>elimina(el.id)}>X</button></li>);

    return (<>

        <h1>alumnes</h1>


        <hr />
        <form onSubmit={desar}>
            Nombre: <input type="text" onChange={(e)=>setNombre(e.target.value)} />
            <br />
            Direccion: <input type="text" onChange={(e)=>setDireccion(e.target.value)} />
            <br />
            Poblacion: <input type="text" onChange={(e)=>setPoblacion(e.target.value)} />
            <br />
            CP: <input type="text" onChange={(e)=>setPobla(e.target.value)} />
            <br />
            Poblacion: <input type="text" onChange={(e)=>setPoblacion(e.target.value)} />
            <br />
            Poblacion: <input type="text" onChange={(e)=>setPoblacion(e.target.value)} />
            <button type="submit">Desar</button>
        </form>

        <hr />
        <ul>
            {lis}
        </ul>
    </>)
}


export default Alumnes;