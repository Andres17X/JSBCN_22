import { useState } from "react";

function Password() {

    const [actiu, setActiu] = useState(false);

    let estils = {
        width: "60px",
        height: "60px",
        borderRadius : "40px",
        marginRight: "10px",
        display: "inline-block",
        backgroundColor: actiu ? "orange" : "grey"
    }

    let [valor1, setValor1] = useState(0,0,1,0,1,0);

    function Click(){
        if (valor1 === 0)
        alert('Correcto');
    }
    console.log(valor1[1])
    console.log(valor1[0])

    return (
        <>
        <div onClick={Click}style={estils}>{valor1[0]}</div>
        <div onClick={Click}style={estils}>{valor1[1]} </div>
        <div onClick={Click}value={valor1[2]} style={estils}></div>
        <div style={estils}></div>
        <div style={estils}></div>
        <div style={estils}></div>
        </>


    )
}

export default Password;