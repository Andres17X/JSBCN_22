import Bola from "./components/Bola";
import Separadora from "./components/Separadora";
import Titulo from "./components/Titulo";
import BolaX from "./components/BolaX";


function App() {

  return (
    <>
      <h1>Hola</h1>
      <Bola numero="1"/>
      <Bola numero="2"/>
      <Bola numero="33git"/>
      <Separadora margen="1px" color="black" />
      <Separadora margen="3px" color="black" />
      <Titulo texto="Hola 1react" />
      <BolaX talla="1050px" margen="4px" fondo="red" numero="10" />
    </>
  )
}

export default App
