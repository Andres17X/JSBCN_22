import { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Navigate, useParams } from 'react-router-dom';


import {APIURL} from '../apiconfig';
import Titolet from './Titolet';


function BorraAlumne() {
    // useParams() devuelve los parámetros recibidos en la URL
    // ej) /alumnes/borra/33, recibirá un objeto {id: 33}
    const parametros = useParams();

    const ALUMNE = parametros.id;

    const [nom, setNom] = useState("");
    const [tornar, setTornar] = useState(false);

    //lectura datos antes de borrar
    //necesitamos el nombre del alumno para preguntar si se quiere borrar
    useEffect(() => {
        // la API requiere una consulta tipo GET a /api/alumnes/33 para detornar el alumno 33 
        fetch(APIURL + '/alumnes/' + ALUMNE)
          .then(x => x.json())
          .then(x => x.data)
          .then(data =>{
            setNom(data.nom);
          })
          .catch(err => { 
            console.log(err);
          });
    
      }, []);


    function borrar(){
        const opciones = {
            "method": "DELETE"
        }
        const url = APIURL+"/alumnes/"+ALUMNE;
        // llamamos a la url de la api /api/alumnes/33 con DELETE, para borrar alumno id=33
       fetch(url, opciones)
       .then(x => x.json())
       //tras borrar, establecemos tornar a true para tornar a listado
       .then(x => setTornar(true))
       .catch(x => console.log(x))
    }

    // volvemos al listado sin borrar
    function tornarListado(){
        setTornar(true)
    }


    // si tornar es true, saltamos a /alumnes
    if (tornar){
        return <Navigate to="/alumnes" />;
    }

    return (
        <>
            <Titolet text="Esborra alumne" />
            <Row>
                <Col xs="8">
                    <h3>Seguro que quieres borrar al alumno: {nom}?</h3>
                        <Button variant="danger" onClick={borrar}>
                            SI
                        </Button>
                        {' '}
                        <Button variant="primary" onClick={tornarListado}>
                            NO
                        </Button>

                </Col>
            </Row>

        </>
    );
}

export default BorraAlumne;
