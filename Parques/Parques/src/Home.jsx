import {useContext} from "react";
import TraductorContext from "./TraductorContext.js";
import './Home.css';
import homejpg from './fotos/home.jpg';

function Home(){
  const Traductor = useContext(TraductorContext);

    return (
        <>
        <h1 className="HomeH1">Parcs de Barcelona</h1>
        <div className="TextoP">
        <p>{Traductor.traduce('Home')} {' '} </p>
        <img src={homejpg}></img>
        </div>

        </>
  );
}

export default Home;
