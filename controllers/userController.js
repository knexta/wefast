const db = require("../config/sequelize.config");
const User = db.users;

//Get all User

const createUser = async (req, res) => {
  let info = {
    name: req.body.name,
    password: req.body.password,
    phone: req.body.phone,
  };
  const user = await User.create(info);
  res.status(200).send(user);
};

//Get allUser
const getAllUser = async (req, res) => {
  let users = await User.findAll({});
  res.status(200).send(users);
};

//Get User by Id
const getUserById = async (req, res) => {
  let id = req.params.id;
  let user = await User.findOne({ where: { id: id } });
  res.status(200).send(user);
};

//Update user by id
const updateUser = async (req, res) => {
  let id = req.params.id;
  const user = await User.update(req.body, { where: { id: id } });
  res.status(200).send(user);
};

//Delete user By ID
const deleteUser = async (req, res) => {
  let id = req.params.id;
  await User.destroy({ where: { id: id } });
  res.status(200).send("product is deleted");
};

module.exports = {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
};
