const {Product, User, Type, Trademark} = require('../db')

const postProduct = async (product) => {
    console.log(product)
    const {name, price, type, trademark} = product
    if(!name || !price) throw Error('Mandatory data missing')
    else {
        try {
            const newProduct = await Product.create({
                name,price,
                trademarkId: type,
                typeId: trademark
            })
          
            return newProduct
        } catch (error) {
            throw Error(error.message)
        }
    }
}



module.exports = {
    postProduct
}