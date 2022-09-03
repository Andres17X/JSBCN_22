import { useState, useContext } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {login} from '../tools/Api';



const Login = ({ setToken }) => {
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("xxx")
    login(email, password)
    .then(resp => {
      if (resp.ok) {
        setToken(resp.token);
        setShow(false);
      } else {
        console.log("resp",resp)
        setError(resp.msg);
      }
    })
   .catch(e => setError(e))
  };

  return (
    <>  
      <Modal show={show} >
        <Modal.Header >
          <Modal.Title>Login required</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" value={email} onInput={(e)=>setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} onInput={(e)=>setPassword(e.target.value)}/>
            </Form.Group>
          </Form>
          {error ? <span className="error-msg">{error}</span> : <span>Enter credentials</span>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default Login;
