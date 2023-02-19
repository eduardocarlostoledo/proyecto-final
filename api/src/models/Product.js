
const { DataTypes} = require('sequelize');

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
        image: {
            type: DataTypes.TEXT
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        // inCart:{
        //     type: DataTypes.BOOLEAN,
        //     allowNull:false,
        //     defaultValue:false,
        // }

    },{timestamps:false})
}
