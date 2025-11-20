// Hardcoded user
const user = {
  username: "admin",
  password: "1234",
};

exports.loginUser = (req, res) => {
  const { username, password } = req.body;

  // Check if credentials match
  if (username === user.username && password === user.password) {
    return res.json({
      success: true,
      message: "Login successful!",
    });
  }

  // Incorrect credentials
  return res.json({
    success: false,
    message: "Invalid credentials",
  });
};
