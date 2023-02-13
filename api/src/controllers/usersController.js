const {User} = require('../db')

const getUsers = async () => {
try {
    const users = await User.findAll()
    return users
} catch (error) {
    throw Error(error.message)
}    
}

const putUser = async (user) => {
    const { name, lastname, email, image, password, phonenumber, country, city, address } = user

if (!name || !lastname || !email || !image || !password || !phonenumber || !country || !city || !address)  throw Error('User data missing')
else {
    try {
        const changeUser = await User.update({ name, lastname, email, image, password, phonenumber, country, city, address })
        return changeUser
    } catch (error) {
        throw Error(error.message)
    }
}
}

module.exports = {
    putUser, getUsers
}