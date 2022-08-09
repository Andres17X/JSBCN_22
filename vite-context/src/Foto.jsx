import { useParams } from 'react-router-dom';

import Cotxe from './fotos/jimny.jpeg';
import Moto from './fotos/voge.jpeg';
import Bici from './fotos/raven.png';



function Foto() {

    const parametros = useParams();

    const tema = parametros.tema;

    let laFoto;
    switch (tema) {
        case "cotxe":
            laFoto = Cotxe;
            break;
        case "moto":
            laFoto = Moto;
            break;
        default:
            laFoto = Bici;
            break;
    }

    return (
        <>
            <h1>Foto {tema}</h1>
            <br />
            <img src={laFoto} width="500px" />
        </>
    )
}

export default Foto;
