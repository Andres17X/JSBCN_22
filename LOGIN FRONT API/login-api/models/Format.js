

module.exports = (sequelize, DataTypes) => {
  const Format = sequelize.define('Format', {
    format: DataTypes.STRING,
    preu: DataTypes.FLOAT
    
  }, { tableName: 'formats', timestamps: false});
  
  return Format;
};
