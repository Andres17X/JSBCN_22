import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

import {APIURL} from '../apiconfig';
import Titolet from './Titolet';

function NouAlumne() {

    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");

    function enviaAlumno(e){
        e.preventDefault();

        const alumno = {
            "nom": nom,
            "email": email
        }

        const opciones = {
            "method": "POST",
            "body": JSON.stringify(alumno),
            headers: {"Content-Type": "application/json"}
        }
        const url = APIURL+"/alumnes";

       fetch(url, opciones)
       .then(x => x.json())
       .then(x => console.log(x))
       .catch(x => console.log(x))

        

    }


    return (
        <>
            <Titolet text="Nou Alumne" />
            <Row>
                <Col xs="8">
                    <Form onSubmit={enviaAlumno}>
                        <Form.Group className="mb-3" controlId="formnom">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control value={nom} onInput={(e) => setNom(e.target.value)} type="text" placeholder="Entra nom" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formemail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={email} onInput={(e) => setEmail(e.target.value)} type="email" placeholder="Entra email" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Desar
                        </Button>
                    </Form>


                </Col>
            </Row>

        </>
    );
}

export default NouAlumne;
