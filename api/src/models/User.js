const { DataTypes } = require('sequelize');

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
        adress: {
            type: DataTypes.STRING
        }
    },{timestamps:false})
}