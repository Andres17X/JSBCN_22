import './Titulo.css';

function Titulo(props){

    return (
        <>
        <div>
        <h1 style={{color: props.color}} className={props.title}>{props.texto}</h1>
        </div>
        </>
    )
}

export default Titulo;