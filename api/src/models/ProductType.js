const {DataTypes} = require("sequelize")
module.exports= (sequelize)=>{
    sequelize.define('tipoDeProducto',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{timestamps:false})}