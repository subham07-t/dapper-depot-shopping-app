const register = (req, res) => {
  res.send("register tested succesfully");
};

const login = (req, res) => {
  res.send("login tested succesfully");
};

module.exports = {
  register,
  login,
};
