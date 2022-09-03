import { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Navigate, useParams } from 'react-router-dom';


import {APIURL} from '../apiconfig';
import Titolet from './Titolet';


function EditaAlumne() {

    const parametros = useParams();
    const ALUMNE_ID = parametros.id;

    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [datanaix, setDataNaix] = useState("");
    const [goTo, setGoTo] = useState(false);

    //lectura datos antes de editar
    useEffect(() => {
   
        fetch(APIURL + '/alumnes/' + ALUMNE_ID)
          .then(x => x.json())
          .then(x => x.data)
          .then(al =>{
            setNom(al.nom);
            setEmail(al.email);
            setDataNaix(al.datanaix);
              
          })
          .catch(err => { 
            setError(true);
            console.log(err);
          });
    
      }, []);


    function desaAlumne(e){
        e.preventDefault();

        const alumno = {
            "nom": nom,
            "email": email,
            "datanaix": datanaix,
        }

        const opcions = {
            "method": "PUT",
            "body": JSON.stringify(alumno),
            headers: {"Content-Type": "application/json"}
        }
        const url = APIURL+"/alumnes/"+ALUMNE_ID;

       fetch(url, opcions)
       .then(() => setGoTo("/alumnes"))
       .catch(x => console.log(x))

    }


    if (goTo) {
        return <Navigate to={goTo} />;
    }
    
    return (
        <>
            <Titolet text="Edita alumne" />
            <Row>
                <Col xs="8">
                    <Form onSubmit={desaAlumne}>
                        <Form.Group className="mb-3" controlId="formnom">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control value={nom} onInput={(e) => setNom(e.target.value)} type="text" placeholder="Entra nom" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formemail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={email} onInput={(e) => setEmail(e.target.value)} type="email" placeholder="Entra email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formemail">
                            <Form.Label>Data naixement</Form.Label>
                            <Form.Control value={datanaix} onInput={(e) => setDataNaix(e.target.value)} type="date" placeholder="Entra data" />
                        </Form.Group>
                        <hr />
                        <Button variant="success" type="submit" size="sm" >
                            Desar
                        </Button>
                        {' '}
                        <Button variant="danger" type="button" size="sm" onClick={()=>setGoTo('/alumnes')} >
                            Cancel.lar
                        </Button>
                    </Form>
                </Col>
            </Row>

        </>
    );
}

export default EditaAlumne;
