const User = require("../models/User.js");
// insert new User
exports.insertUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const { name, email, age, country, _id } = user;

    res
      .status(200)
      .json({ id: _id, name: name, email: email, age: age, country: country });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Fetch All Users
exports.fetchUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch User Detail
exports.fetchUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id, { password: 0 });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    // we cannot find any user in database
    if (!user) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    const updatedUser = await User.findById(id);
    const { name, email, age, country, _id } = updatedUser;

    res
      .status(200)
      .json({ id: _id, name: name, email: email, age: age, country: country });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Deletion
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id).select("-password");
    if (!user) {
      return res
        .status(404)
        .json({ message: `cannot find any user with ID ${id}` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
