import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';


function EditaFormat(){

    const [format, setFormat] = useState('');
    const [preu, setPreu] = useState(0);
    const parametros = useParams();
    const idBuscat = parametros.id;

    console.log("render!");

    useEffect(()=>{

        fetch("http://localhost:3030/api/format/"+idBuscat)
        .then(cosa => cosa.json())
        .then(cosa => {
            if (cosa.ok){
                setFormat(cosa.data.format);
                setPreu(cosa.data.preu);
            } else {
                console.log("algo no va bien", cosa)
            }
        })
        .catch(error => console.log(error))


    }, [])


    function submit(e){
        e.preventDefault();

        const opciones = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({format: format, preu: preu})
          };

        fetch("http://localhost:3030/api/format/"+idBuscat, opciones)


    }

    return (<>
        <h1>Editar format {idBuscat}</h1>


        <form onSubmit={submit} >
            Format: <input value={format} onInput={(e)=>setFormat(e.target.value)} />
            <br />
            Preu: <input value={preu} onInput={(e)=>setPreu(e.target.value*1)} />
            <br />
            <button type="submit">Enviar</button>
        </form>

    </>)
}


export default EditaFormat;