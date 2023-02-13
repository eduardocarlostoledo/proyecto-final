const {Product} = require('../db')

const postProduct = async (product) => {
    console.log(product)
    const {name, price} = product
    if(!name || !price) throw Error('Mandatory data missing')
    else {
        try {
            const newProduct = await Product.create({name,price})
            return newProduct
        } catch (error) {
            throw Error(error.message)
        }
    }
}



module.exports = {
    postProduct
}