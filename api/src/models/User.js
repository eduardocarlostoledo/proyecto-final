
const { DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
        id:{
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        image: {
            type: DataTypes.TEXT
        },
        password: {
            type: DataTypes.STRING,
            unique: true
        },
        phonenumber: {
            type: DataTypes.STRING,
            unique: true
        },
        country: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        }
    },{timestamps:false})
}