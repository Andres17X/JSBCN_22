
import {dataTypes, sequelize} from "../loadSequelize.js";
import Alumne from "./Alumne.js";
import Matricula from "./Matricula.js";


const Edicio = sequelize.define('Edicio', {
    titol: dataTypes.STRING,
    datainici: dataTypes.DATEONLY

}, { // opcions
    tableName: 'edicions',
    timestamps: false,
    name: {
        singular: 'edicio',
        plural: 'edicions',
    }
});




export default Edicio;