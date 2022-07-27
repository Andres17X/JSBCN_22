import { useState } from "react";

import Bola from "./components/Bola";
import Separadora from "./components/Separadora";
import Titulo from "./components/Titulo";
import BolaX from "./components/BolaX";
import Conmuta from "./components/Conmuta";
import ConmutaTodos from "./components/ConmutaTodos";
import SumaResta from "./components/SumaResta";


function App() {

const [index,setIndex] = useState(4);

  return (
    <>
      <h1>Ejercicios SIN/CON Props </h1>
      <Bola numero="1"/>
      <Bola numero="2"/>
      <Bola numero="33git"/>
      <Separadora margen="1px" color="black" />
      <Separadora margen="3px" color="black" />
      <Titulo texto="Hola 1react" />
      <BolaX talla="1050px" margen="4px" fondo="red" numero="10" />
      <br></br>
      <h1>EJERCICIO 1 useState</h1>
      <Conmuta/>
      <Conmuta/>
      <Conmuta/>
      <Conmuta/>
      <Conmuta/>
      <h1>EJERCICIO 2</h1>
      <ConmutaTodos />
      <h1>EJERCICIO 3 Y 4</h1>
      <SumaResta />
      <Numero />
    </>
  )
}

export default App
