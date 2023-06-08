const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { signupSchema, signinSchema } = require('../validations/authValidation');

async function signup(req, res) {
  try {
    const { username, password } = await signupSchema.validateAsync(req.body);

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, password: hashedPassword });

    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
}

async function signin(req, res) {
  try {
    const { username, password } = await signinSchema.validateAsync(req.body);

    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.sendStatus(401);
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.sendStatus(401);
    }

    const accessToken = jwt.sign({ username: user.username }, secretKey, { expiresIn: '15m' });
    res.json({ accessToken });
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
}

module.exports = {
  signup,
  signin,
};
