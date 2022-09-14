const userRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

userRouter.route('/').put(async (req, res) => {
  const { id } = res.locals.user;
  const { name, email, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 2);
    const user = await User.findOne({ where: { id } });
    user.name = name;
    user.email = email;
    user.password = hash;
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

userRouter.route('/money').put(async (req, res) => {
  try {
    const id = req.session.userId;
    const money = req.body.gameMoney + req.body.userMoney;
    await User.update({ money }, {
      where: {
        id,
      },
    });
    res.json({ money });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = userRouter;
