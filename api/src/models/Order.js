const {DataTypes} = require("sequelize")

module.exports = (sequelize)=>{
    sequelize.define('order',{
        id:{
            type: DataTypes.BIGINT,
            autoIncrement: true,            
            primaryKey: true,
        },
        cartUserId:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        paymentId:{
            type: DataTypes.INTEGER,
            allowNull:false
        },        
        statusId:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        merchantOrderId:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{timestamps:false})}