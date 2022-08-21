import  React, {useState} from 'react';
import piedrajpg from './fotos/piedra.jpg';
import papeljpg from './fotos/papel.jpg';
import tijerasjpg from './fotos/tijeras.jpg';
import readyjpg from './fotos/ready.jpg';
import win from './fotos/gif.webp';
import tied from './fotos/tied.gif';
import lost from './fotos/lost.gif';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PiedraPapelTijera.css';


function PiedraPapelTijera(){

    let [Jugador, setJugador] = useState();
    let [Maquina, setMaquina] = useState();
    let [MuestraJ1, setMuestraJ1] = useState(readyjpg)
    let [MuestraCPU, setMuestraCPU] = useState(readyjpg)
    let [Resultado, setResultado] = useState()
    function Juego0() {
        setJugador(0)
        setMuestraJ1(MuestraJ1 = piedrajpg)
        setMaquina(Maquina = Math.floor (Math.random() * (1,3) ))
        console.log(Maquina)
         if (Jugador == Maquina) {
            setResultado(Resultado = tied)
            setMuestraCPU(piedrajpg)
         }
         if (Maquina == 1) {
            setResultado(Resultado = lost)
            setMuestraCPU(papeljpg)
         }
         if (Maquina == 2) {
            setResultado(Resultado = win)
            setMuestraCPU(tijerasjpg)
         }
    }
    function Juego1() {
        setJugador(Jugador = 1)
        setMuestraJ1(papeljpg)
        setMaquina(Maquina = Math.floor (Math.random() * (1,3) ))
        console.log(Maquina)
         if (Jugador == Maquina) {
            setResultado(Resultado = tied)
            setMuestraCPU(papeljpg)
         }
         if (Maquina == 0) {
            setResultado(Resultado = win)
            setMuestraCPU(piedrajpg)
         }
         if (Maquina == 2) {
            setResultado(Resultado = lost)
            setMuestraCPU(tijerasjpg)
         }
    }
    function Juego2() {
        setJugador(Jugador = 2)
        setMuestraJ1(tijerasjpg)
        setMaquina(Maquina = Math.floor (Math.random() * (1,3) ))
        console.log(Maquina)
         if (Jugador == Maquina) {
            setResultado(Resultado = tied)
            setMuestraCPU(tijerasjpg)
         }
         if (Maquina == 0) {
            setResultado(Resultado = lost)
            setMuestraCPU(piedrajpg)
         }
         if (Maquina == 1) {
            setResultado(Resultado = win)
            setMuestraCPU(papeljpg)
         }
    }

    return (
        <>
            <h1>PPT</h1>
            <div className='cards'>
               <div className='card1'>
               <h5>JUGADOR:</h5>
               <img src={MuestraJ1}></img>
               <h1></h1>
               <span >score:</span>
               </div>
               <div className='card2'><img src={MuestraCPU}></img></div> 
            </div>
            <div className='elecciones col-md-12'>
            <Button onClick={Juego0} >Piedra</Button>{' '}
            <Button onClick={Juego1} >Papel</Button>{' '}
            <Button onClick={Juego2} >Tijeras</Button>{' '}
            </div>


            <br></br><br></br>
            <h1>Jugador: {MuestraJ1}</h1>
            <h1>Máquina: {MuestraCPU}</h1>
            <img className='Resultado' src={Resultado}></img>
        </>
    )
}

export default PiedraPapelTijera;