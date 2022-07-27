import Bola from "./components/Bola";
import Separadora from "./components/Separadora";
import Titulo from "./components/Titulo";
import BolaX from "./components/BolaX";
import Conmuta from "./components/Conmuta";
import ConmutaTodos from "./components/ConmutaTodos";
import SumaResta from "./components/SumaResta";


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
      <br></br>
      <Conmuta/>
      <Conmuta/>
      <Conmuta/>
      <Conmuta/>
      <Conmuta/>
      <br></br>
      <ConmutaTodos />
      <br></br>
      <br></br>
      <SumaResta />
      <br></br>
    </>
  )
}

export default App
