const asynHandler = require("express-async-handler");
//@desc Register user
//@route POST /api/users/register
//@access public

const registerUser = asynHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
  }
  res.json({ message: "Resgister the user" });
});

//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asynHandler(async (req, res) => {
  res.json({ message: "Login the user" });
});

//@desc Current user
//@route POST /api/users/current
//@access private
const currentUser = asynHandler(async (req, res) => {
  res.json({ message: "Current user" });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
