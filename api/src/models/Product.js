const { DataTypes, UUIDV4, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('product', {
        id:{
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{timestamps:false})
}