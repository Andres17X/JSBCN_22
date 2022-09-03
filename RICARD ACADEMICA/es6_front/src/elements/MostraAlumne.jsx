import { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Badge, Table } from 'react-bootstrap';
import { Navigate, useParams } from 'react-router-dom';


import { APIURL } from '../apiconfig';
import Titolet from './Titolet';
import Loading from './Loading';


function Mostra() {

    const parametros = useParams();

    const ALUMNE_ID = parametros.id;

    const [alumne, setAlumne] = useState(null);
    const [goTo, setGoTo] = useState(false);
    const [edicions, setEdicions] = useState([]);
    const [rows, setRows] = useState([]);
    const [error, setError] = useState([]);
    const [cursTriat, setCursTriat] = useState(0);
    const [opcions, setOpcions] = useState([]);


    function carregaAlumne() {



        fetch(APIURL + '/alumnes/' + ALUMNE_ID)
            .then(x => x.json())
            .then(z => z.data)
            .then(data => {
                setAlumne(data);
            })
            .catch(err => {
                setError(true);
                console.log(err);
            });


        fetch(APIURL + '/edicions')
            .then(x => x.json())
            .then(z => z.data)
            .then(data => {
                setEdicions(data);
            })
            .catch(err => {
                setError(true);
                console.log(err);
            });

    }



    useEffect(() => {

        carregaAlumne();

    }, []);

    useEffect(() => {
        if (alumne) {
            setRows(alumne.edicions.map((ed, aindex) => {
                return <tr key={aindex}><td>{ed.titol}</td><td>{ed.datainici}</td></tr>

            }));
        }
    }, [alumne])

    function afegeixCurs() {
        console.log("afegint curs " + cursTriat);

        const opcions = {
            "method": "POST"
        }

        fetch(APIURL + '/edicions/' + cursTriat + "/noualumne/" + alumne.id, opcions)
            .then(() => {
                carregaAlumne();
            })
            .catch(err => {
                setError(true);
                console.log(err);
            });


    }

    useEffect(() => {
        if (edicions.length) {
            setOpcions(edicions.map((e, i) => <option key={i} value={e.id}>{e.titol}</option>))
        }
    }, [edicions])


    if (goTo) {
        return <Navigate to={goTo} />;
    }


    if (!alumne) {
        return <Loading />;
    }

    return (
        <>
            <Titolet text={"Alumne: " + alumne.nom} />
            <Row>
                <Col xs="8">
                    <Form>

                        <Form.Group className="mb-3" controlId="formemail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={alumne.email} disabled type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formemail">
                            <Form.Label>Data Naixement</Form.Label>
                            <Form.Control value={alumne.datanaix} disabled type="email" />
                        </Form.Group>

                        <Table>
                            <thead>
                                <th>Edicio</th>
                                <th>Data inici</th>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </Table>


                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="ediselect">Tria edició</Form.Label>
                            <Form.Select id="ediselect" onChange={(e) => setCursTriat(e.target.value)}>
                                <option value={0}>--</option>
                                {opcions}
                            </Form.Select>
                        </Form.Group>

                        <Button variant="primary" type="button" size="sm" onClick={() => afegeixCurs()} >
                            Afegir curs
                        </Button>

                        <hr />
                        <Button variant="primary" type="button" size="sm" onClick={() => setGoTo('/alumnes')} >
                            Tornar
                        </Button>
                    </Form>
                </Col>
            </Row>


        </>
    );
}

export default Mostra;
