const {DataTypes} = require("sequelize")

module.exports = (sequelize)=>{
    sequelize.define('cart',{
        prodId:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
<<<<<<< Updated upstream
        userId:{
            type:DataTypes.INTEGER,
            allowNull:false,
=======
        cartUserId:{
            type:DataTypes.INTEGER,
            allowNull:false
>>>>>>> Stashed changes
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        image:{
            type: DataTypes.STRING,
            allowNull:false
        },
        amount:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        price:{
            type: DataTypes.DOUBLE,
            allowNull: false
<<<<<<< Updated upstream
=======
        },       
        order: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 0
>>>>>>> Stashed changes
        }
    },{timestamps:false})}