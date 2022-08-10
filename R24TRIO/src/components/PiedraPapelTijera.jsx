import  React, {useState} from 'react';
import piedrapng from './fotos/piedra.png';
import papelpng from './fotos/papel.png';
import tijeraspng from './fotos/tijeras.png';
import win from './fotos/gif.webp';
import tied from './fotos/tied.gif';
import lost from './fotos/lost.gif';
import './PiedraPapelTijera.css';


function PiedraPapelTijera(){

    let [Jugador, setJugador] = useState();
    let [Maquina, setMaquina] = useState();
    let [MuestraJ1, setMuestraJ1] = useState('')
    let [MuestraCPU, setMuestraCPU] = useState('')
    let [Resultado, setResultado] = useState()
    function Juego0() {
        setJugador(0)
        setMuestraJ1("Piedra")
        setMaquina(Maquina = Math.floor (Math.random() * (1,3) ))
        console.log(Maquina)
         if (Jugador == Maquina) {
            setResultado(Resultado = tied)
            setMuestraCPU("Piedra")
         }
         if (Maquina == 1) {
            setResultado(Resultado = lost)
            setMuestraCPU("Papel")
         }
         if (Maquina == 2) {
            setResultado(Resultado = win)
            setMuestraCPU("Tijeras")
         }
    }
    function Juego1() {
        setJugador(Jugador = 1)
        setMuestraJ1('Papel')
        setMaquina(Maquina = Math.floor (Math.random() * (1,3) ))
        console.log(Maquina)
         if (Jugador == Maquina) {
            setResultado(Resultado = tied)
            setMuestraCPU("Papel")
         }
         if (Maquina == 0) {
            setResultado(Resultado = win)
            setMuestraCPU("Piedra")
         }
         if (Maquina == 2) {
            setResultado(Resultado = lost)
            setMuestraCPU("Tijeras")
         }
    }
    function Juego2() {
        setJugador(Jugador = 2)
        setMuestraJ1("Tijeras")
        setMaquina(Maquina = Math.floor (Math.random() * (1,3) ))
        console.log(Maquina)
         if (Jugador == Maquina) {
            setResultado(Resultado = tied)
            setMuestraCPU("Tijeras")
         }
         if (Maquina == 0) {
            setResultado(Resultado = lost)
            setMuestraCPU("Piedra")
         }
         if (Maquina == 1) {
            setResultado(Resultado = win)
            setMuestraCPU("Papel")
         }
    }

    return (
        <>
            <h1>PPT</h1>
            <img className='Icons' src={piedrapng} onClick={Juego0}></img>
            <img className='Icons' src={papelpng} onClick={Juego1}></img>
            <img className='Icons' src={tijeraspng} onClick={Juego2}></img>
            <br></br><br></br>
            <h1>Jugador: {MuestraJ1}</h1>
            <h1>Máquina: {MuestraCPU}</h1>
            <img className='Resultado' src={Resultado}></img>
        </>
    )
}

export default PiedraPapelTijera;