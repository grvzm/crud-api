import User from '../models/UserModel.js';

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.json({ error: err });
  }
};
const getUser = async (req, res) => {
  try {
    const userId = req.params.userid;
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (err) {
    res.json({ error: err });
  }
};

export { getAllUsers, getUser };
