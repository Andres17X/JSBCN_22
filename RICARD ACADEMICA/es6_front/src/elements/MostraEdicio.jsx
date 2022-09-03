import { useState, useEffect } from 'react';
import { Badge, Form, Button, Row, Col } from 'react-bootstrap';
import { Navigate, useParams } from 'react-router-dom';


import { APIURL } from '../apiconfig';
import Titolet from './Titolet';
import Loading from './Loading';

function Mostra() {

    const parametros = useParams();

    const EDICIO_ID = parametros.id;

    const [edicio, setEdicio] = useState(null);
    const [goTo, setGoTo] = useState(false);
    const [alumnes, setAlumnes] = useState([]);

    //lectura datos antes de editar
    useEffect(() => {

        fetch(APIURL + '/edicions/' + EDICIO_ID)
            .then(x => x.json())
            .then(x => x.data)
            .then(data => {
                setEdicio(data);
            })
            .catch(err => {
                setError(true);
                console.log(err);
            });

    }, []);

    useEffect(() => {
        if (edicio) {
            setAlumnes(edicio.Alumnes.map((al, aindex) => {
                return <Badge
                    onClick={()=>setGoTo("/alumnes/mostra/"+al.id)}
                    className="espai pointer"
                    key={aindex}
                    pill bg="primary">{al.nom}</Badge>
            }));
        }
    }, [edicio])


    if (goTo) {
        return <Navigate to={goTo} />;
    }

    if (!edicio) {
        return <Loading />;
    }

    return (
        <>
            <Titolet text={"Edicio: "+edicio.titol} />
            <Row>
                <Col xs="8">
                    <Form>
                    <Form.Group className="mb-3" controlId="formnom">
                            <Form.Label>Curs</Form.Label>
                            <Form.Control value={edicio.curs.informacio} disabled type="text" />
                        </Form.Group>
                    
                        <Form.Group className="mb-3" controlId="formdatainici">
                            <Form.Label>Data inici</Form.Label>
                            <Form.Control value={edicio.datainici} disabled type="text"  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formdatainici">
                            <Form.Label>Alumnes</Form.Label>
                            <div className="alumnes">

                            {alumnes}
                            </div>
                        </Form.Group>
                        <hr />
                        <Button variant="primary" type="button" size="sm"  onClick={() => setGoTo('/edicions')} >
                            Tornar
                        </Button>
                    </Form>
                </Col>
            </Row>

        </>
    );
}

export default Mostra;
