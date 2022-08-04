import './App.css';
import Titulo from './components/Titulo.jsx';
import Clics from './components/Clics';
import Sorteo from './components/Sorteo';

function App() {

  return (<>
    <Titulo texto="hola" color="red" />
    <Titulo texto="react" color="green" />
    <Clics />
    <br/>
    <Sorteo />
  </>
  )
}

export default App
