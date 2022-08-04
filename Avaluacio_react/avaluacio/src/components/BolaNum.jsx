
function BolaNum(props){

    let estils = {
        width: "40px",
        height: "40px",
        borderRadius: "100%",
        display: "inline-block",
        margin: "5px",
        backgroundColor: "red" ,
        color: "white",
        fontSize: "25px",
        lineHeight: "40px",
        textAlign: "center"

    }

    return (
        <>
            <div style={estils}>{props.num}</div>
        </>
    )
}


export default BolaNum;
