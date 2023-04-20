import User from '../models/UserModel.js';

const findAndDeleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.userid);
    res.status(200).json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export { findAndDeleteUser };
