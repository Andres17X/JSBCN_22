
import {dataTypes, sequelize} from "../loadSequelize.js";

const Alumne = sequelize.define('Alumne', {
    nom: dataTypes.STRING,
    datanaix: dataTypes.DATEONLY,
    email: dataTypes.STRING
}, { tableName: 'alumnes', timestamps: false });




export default Alumne;