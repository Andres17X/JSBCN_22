import {useState} from 'react';



function NouFormat(){

    const [format, setFormat] = useState('');
    const [preu, setPreu] = useState(0);

    function submit(e){
        e.preventDefault();

        const opciones = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({format: format, preu: preu})
          };

        fetch("http://localhost:3030/api/format", opciones)


    }

    return (<>
        <h1>Nou format</h1>

        <form onSubmit={submit} >
            Format: <input value={format} onInput={(e)=>setFormat(e.target.value)} />
            <br />
            Preu: <input value={preu} onInput={(e)=>setPreu(e.target.value*1)} />
            <br />
            <button type="submit">Enviar</button>
        </form>

    </>)
}


export default NouFormat;