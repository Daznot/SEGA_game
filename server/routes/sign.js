const router = require('express').Router();
const bcrypt = require('bcrypt');
const {
  access,
  AUTHENTICATED,
  UNAUTHENTICATED,
} = require('../middlewares/access');
const { User, Hero } = require('../db/models');

function heroDefaultValues(userId) {
  return {
    userId,
    hp: 100,
    speed: 3,
    damage: 8,
    score: 0,
    coolDown: 0,
    lvl: 1,
  };
}

function clientUser(data) {
  return {
    user: {
      id: data.id,
      email: data.email,
      name: data.name,
      money: data.money,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    },
  };
}

router.route('/out').get(access(AUTHENTICATED), async (req, res) => {
  req.session.destroy();
  res.clearCookie(process.env.SESSION_COOKIE);

  res.status(200).json({ message: 'Session destroyed!' });
});

router
  .route('/in')
  .get(access(AUTHENTICATED), (req, res) => {
    if (req.session.userId && res.locals.user) {
      res.status(200).json(clientUser(res.locals.user));
    } else {
      res.status(404).json({ message: 'Session not found!' });
    }
  })
  .post(access(UNAUTHENTICATED), async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.isExists(email);

      if (!user) {
        res.status(404).json({ message: 'User not found!' });
        return;
      }

      if (!(await bcrypt.compare(password, user.password))) {
        res.status(401).json({ message: 'Incorrect password!' });
        return;
      }

      req.session.userId = user.id;

      res.status(200).json(clientUser(user));
    } catch (error) {
      res.status(500).json(error);
    }
  });

router.route('/up').post(access(UNAUTHENTICATED), async (req, res) => {
  try {
    const { email, name, password } = req.body;

    if (!password[0] || password[0] !== password[1]) {
      res.status(401).json({ message: 'Incorrect password!' });
      return;
    }

    if (await User.isExists(email)) {
      res.status(409).json({ message: 'User exists!' });
      return;
    }

    // Create User
    const hash = await bcrypt.hash(password[0], 2);
    const user = await User.create({
      email, name, password: hash,
    });
    await user.save();
    req.session.userId = user.id;

    // Create Hero for new User
    const hero = await Hero.create(heroDefaultValues(user.id));
    await hero.save();

    res.status(200).json(clientUser(user));
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
