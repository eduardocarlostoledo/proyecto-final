const {User} = require('../db')

const getUsers = async () => {
    try {
      const result = await User.findAll();
      if (result) return result;
      throw new Error("Empy users database:");
    } catch (error) {
      throw new Error("Error retrieving Users Database" + error.message);
    }
  };

const getUserId = async (userId) => {
    try {
      const result = await User.findByPk(userId);
      if (result) return result;
      throw new Error("User not found with ID: " + userId);
    } catch (error) {
      throw new Error("Error retrieving User by ID: " + error.message);
    }
  };

const postUser = async (user) => {
    const { name, lastname, email, image, password, phonenumber, country, city, address } = user

if (!name || !lastname || !email || !image || !password || !phonenumber || !country || !city || !address)  throw Error('User data missing')
else {
    try {
        const changeUser = await User.create({ name, lastname, email, image, password, phonenumber, country, city, address })
        return changeUser
    } catch (error) {
        throw Error(error.message)
    }
}
}
const putUser = async (user, id) => {
  const { name, lastname, email, image, password, phonenumber, country, city, address } = user

if (!user)  throw Error('User data missing')
else {
  try {
      const changeUser = await User.update({ name, lastname, email, image, password, phonenumber, country, city, address },{where:{id}})
      return changeUser
  } catch (error) {
      throw Error(error.message)
  }
}
}


module.exports = {
    postUser, getUsers, getUserId, putUser
}