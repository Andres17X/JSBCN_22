
import {dataTypes, sequelize} from "../loadSequelize.js";



const Matricula = sequelize.define('Matricula', {
    preu: dataTypes.FLOAT(10, 2)
}, { tableName: 'matricula', timestamps: false });


export default Matricula;