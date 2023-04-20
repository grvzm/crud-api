import User from '../models/UserModel.js';

const createUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.json({ error: err });
  }
};

export { createUser };
