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
            type: DataTypes.TEXT,
            allowNull:false
        },        
        statusId:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        merchantOrderId:{
            type: DataTypes.TEXT,
            allowNull: false
        }
    },{timestamps:false})}