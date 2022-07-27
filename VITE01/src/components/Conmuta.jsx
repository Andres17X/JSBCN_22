
import  React, {useState} from 'react';



function Conmuta(){

    const [actiu, setActiu] = useState(false);
    
    function clica(){
        setActiu( !actiu );
    }

    let estils = {
        width: "60px",
        height: "60px",
        borderRadius : "40px",
        marginRight: "10px",
        display: "inline-block",
        backgroundColor: actiu ? "orange" : "grey"
    }

    return (
        <>
            <div onClick={clica} style={estils}></div>
        </>
    )
}


export default Conmuta;
