import User from '../models/UserModel.js';

const findAndUpdateUser = async (req, res) => {
  try {
    const userId = req.params.userid;
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).send({ error: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).send(err);
  }
};

const findAndUpdateData = async (req, res) => {
  try {
    const userId = req.params.userid;
    const userToUpdate = await User.findById(userId);
    if (!userToUpdate) {
      return res.status(404).send({ error: 'User not found' });
    }
    const { firstname, lastname, gender, age, jobtitle } = req.body;
    if (firstname) userToUpdate.firstname = firstname;
    if (lastname) userToUpdate.lastname = lastname;
    if (gender) userToUpdate.gender = gender;
    if (age) userToUpdate.age = age;
    if (jobtitle) userToUpdate.jobtitle = jobtitle;
    const updatedUser = await userToUpdate.save();
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).send(err);
  }
};

export { findAndUpdateUser, findAndUpdateData };
