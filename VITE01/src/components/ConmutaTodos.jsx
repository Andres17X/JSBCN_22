
import  React, {useState} from 'react';


function ConmutaTodos(){

    const [actiu, setActiu] = useState(false);
    
    function clica(){
        setActiu(true);
    }
    function clica2(){
        setActiu(false);
    }
    let estils = {
        width: "60px",
        height: "60px",
        borderRadius : "40px",
        marginTop : "10px",
        marginRight: "10px",
        display: "inline-block",
        backgroundColor: actiu ? "red" : "grey"
    }
    let buttons = {
        marginRight: "10px",
        marginTop: "10px"
    }
    return (
        <>
            <div  style={estils}></div>
            <div  style={estils}></div>
            <div  style={estils}></div>
            <div  style={estils}></div>
            <div  style={estils}></div>
            <br></br>
            <button style={buttons} onClick={clica}>Poner Rojo</button>
            <button style={buttons} onClick={clica2}>Quitar Rojo</button>
        </>
    )
}


export default ConmutaTodos;
