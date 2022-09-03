

module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    titol: DataTypes.STRING,
    categoria: DataTypes.STRING,
    foto: DataTypes.STRING,
    
  }, { tableName: 'articles', timestamps: false});
  
  return Article;
};
