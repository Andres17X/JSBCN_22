
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

import Cotxe from './fotos/jimny.jpeg';
import Moto from './fotos/voge.jpeg';
import Bici from './fotos/raven.png';




function Selector() {

    const [valor, setValor] = useState("bici");

    let laFoto = Bici;

    if(valor==="moto"){
        laFoto = Moto;
    }

    if(valor==="coche"){
        laFoto = Cotxe;
    }

  return (
    <>
    <Form.Select value={valor} onChange={e => setValor(e.target.value)}>
      <option>Seleccionar...</option>
      <option value="moto">Moto</option>
      <option value="coche">Coche</option>
      <option value="bici">Bici</option>
    </Form.Select>

        <img src={laFoto} />

    </>
  );
}

export default Selector;