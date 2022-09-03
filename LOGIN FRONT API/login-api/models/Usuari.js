

module.exports = (sequelize, DataTypes) => {
  const Usuari = sequelize.define('Usuari', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nom: DataTypes.STRING,
    idioma: DataTypes.STRING,
    perfil: DataTypes.STRING,
    
  }, { tableName: 'usuaris', timestamps: false});
  
  return Usuari;
};
