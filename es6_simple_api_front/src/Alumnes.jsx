
import { useState, useEffect } from "react";


function Alumnes() {

    const [nom, setNom] = useState("");
    const [data, setData] = useState("");
    const [email, setEmail] = useState("");

    const [dades, setDades] = useState([]);
    const [error, setError] = useState("");

    function loadData(){
        fetch("http://localhost:3000/api/alumnes")
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

        fetch("http://localhost:3000/api/alumnes/"+id,
        {
            method: "DELETE",
        })
        .then(res => loadData())
        .catch(err => console.log("error: ", err))

    }


    function desar(e){

        e.preventDefault();
        const al = {
            nom: nom,
            datanaix: data,
            email: email
        }

        fetch("http://localhost:3000/api/alumnes",
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

    const lis = dades.map(el => <li key={el.id}>{el.nom} {el.datanaix} <button onClick={()=>elimina(el.id)}>X</button></li>);

    return (<>

        <h1>alumnes</h1>


        <hr />
        <form onSubmit={desar}>
            Nom: <input type="text" onChange={(e)=>setNom(e.target.value)} />
            <br />
            Data: <input type="date" onChange={(e)=>setData(e.target.value)} />
            <br />
            Email: <input type="email" onChange={(e)=>setEmail(e.target.value)} />
            <br />
            <button type="submit">Desar</button>
        </form>

        <hr />
        <ul>
            {lis}
        </ul>
    </>)
}


export default Alumnes;