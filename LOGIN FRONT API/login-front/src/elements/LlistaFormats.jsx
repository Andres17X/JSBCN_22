import {useState, useEffect} from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FilaFormato(props){
    return (<tr>
        <td>{props.datos.id}</td>
        <td>{props.datos.format}</td>
        <td>{props.datos.preu}</td>
        <td>
            <Link className="btn btn-primary" to={"/edit_format/"+props.datos.id} >Editar</Link>
            {' '}
            <Button variant="danger" onClick={()=>props.borrar(props.datos.id)} >Eliminar</Button>
        </td>
        </tr>);
}

function LlistaFormats(){


    const [datos, setDatos] = useState([]);


    function cargaDatos(){
        fetch("http://localhost:3030/api/format")
        .then(cosa => cosa.json())
        .then(cosa => {
            if (cosa.ok){
                setDatos(cosa.data);
            } else {
                console.log("algo no va bien", cosa)
            }
        })
        .catch(error => console.log(error))
    }

    function borrar(idBorrar){
        const opciones = {
            method: 'DELETE'
          };
        fetch("http://localhost:3030/api/format/"+idBorrar, opciones)
        .then(()=>cargaDatos())
        
    }

    useEffect(()=>{
      cargaDatos();
    }, [])

    const misformatos = datos.map((el, idx) => <FilaFormato borrar={borrar} key={idx} datos={el} />)

    return (<>
        <h1>Formatos disponibles</h1>
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Format</th>
                    <th>Preu</th>
                </tr>
            </thead>
            <tbody>
                {misformatos}
            </tbody>
        </Table>
    </>)

}

export default LlistaFormats;
