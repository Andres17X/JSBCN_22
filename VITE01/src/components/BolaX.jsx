import './BolaX.css';

function BolaX(props){
    return (
        <>
            <div className='bola' style={{width: props.talla, margin: props.margen, backgroundColor: props.fondo}}>{props.numero}</div>
        </>
    )
}

export default BolaX;