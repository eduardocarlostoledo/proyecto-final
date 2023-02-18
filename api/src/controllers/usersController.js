const { User } = require('../db')
const { encrypt, compare } = require('../helpers/bcrypt');

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

const putUser = async (user, id) => {
  const { name, lastname, email, image, password, phonenumber, country, city, address } = user

  if (!user) throw Error('User data missing')
  else {
    try {
      const userBD = await User.findOne({ where: { email: `${email}` } });
      if (userBD)  throw Error('The email already exists')
      if (password) {
        const passwordHash = await encrypt(password);
        const changeUser = await User.update({ name, lastname, email, image, password: passwordHash, phonenumber, country, city, address }, { where: { id } })
        return changeUser
      }

      const changeUser = await User.update({ name, lastname, email, image, password, phonenumber, country, city, address }, { where: { id } })
      return changeUser


    } catch (error) {
      throw Error(error.message)
    }
  }
}



const postUsers = async (req, res) => {
  try {
    const { name, lastname, email, password, } = req.body;
    if (!name || !lastname || !password || !email)
      return res.json({ msg: 'Missing required fields' });
    const userBD = await User.findOne({ where: { email: `${email}` } });
    if (userBD) return res.json({ msg: 'The email already exists' });

    const passwordHash = await encrypt(password);
    await User.create({
      name: name,
      lastname: lastname,
      password: passwordHash,
      email: email.toLowerCase(),
    });
    return res.json({ msg: `User create succesfully` });
  } catch (error) {
    return res.json({ msg: `Error 404 - ${error}` });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: `${email}` } });
    if (!user) return res.json({ msg: 'User not found' });

    const checkPassword = await compare(password, user.password);

    if (checkPassword) {
      res.status(200).send({
        data: user,
      });
    }
    if (!checkPassword) {
      return res.json({ msg: 'Invalid password' });
    }
  } catch (error) {
    return res.json({ msg: `Error 404 - ${error}` });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await await User.destroy({
      where: {
        id: `${id}`
      }
    });
    if (!deletedUser) return res.json({ msg: 'Username does not exist' });
    return res.json({ msg: 'User Deleted' });
  } catch (error) {
    return res.json({ msg: `Error 404 - ${error}` });
  }
};


module.exports = {
  putUser, getUsers, getUserId, loginUser, postUsers, deleteUser
}