const routerHero = require('express').Router();
const { Hero, User } = require('../db/models');

routerHero.route('/getPlayer')
  .get(async (req, res) => {
    try {
      const id = req.session.userId;
      const hero = await Hero.findOne({
        where: {
          userId: id,
        },
      });
      res.send({ player: hero });
    } catch (error) {
      console.log(error.message);
    }
  });

routerHero.route('/scoreLvl')
  .put(async (req, res) => {
    try {
      const id = req.session.userId;
      await Hero.update({ lvl: req.body.lvl, score: req.body.score }, {
        where: {
          userId: id,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  });

routerHero.route('/updateHp')
  .put(async (req, res) => {
    try {
      const id = req.session.userId;
      const user = await User.findOne({
        where: {
          id,
        },
      });
      if (user.money >= 100) {
        const hero = await Hero.findOne({
          where: {
            userId: id,
          },
        });
        const update = +hero.hp * 1.2;
        await Hero.update({ hp: update }, {
          where: {
            userId: id,
          },
        });
        await User.update({ money: +user.money - 100 }, {
          where: {
            id,
          },
        });
        res.send({ hp: update });
      } else {
        res.send({ status: false });
      }
    } catch (error) {
      console.log(error.message);
    }
  });

routerHero.route('/updateDamage')
  .put(async (req, res) => {
    try {
      const id = req.session.userId;
      const user = await User.findOne({
        where: {
          id,
        },
      });
      if (user.money >= 100) {
        const hero = await Hero.findOne({
          where: {
            userId: id,
          },
        });
        const update = +hero.damage * 1.2;
        await Hero.update({ damage: update }, {
          where: {
            userId: id,
          },
        });
        await User.update({ money: +user.money - 100 }, {
          where: {
            id,
          },
        });
        res.send({ damage: update });
      } else {
        res.send({ status: false });
      }
    } catch (error) {
      console.log(error.message);
    }
  });

routerHero.route('/updateSpeed')
  .put(async (req, res) => {
    try {
      const id = req.session.userId;
      const user = await User.findOne({
        where: {
          id,
        },
      });
      if (user.money >= 100) {
        const hero = await Hero.findOne({
          where: {
            userId: id,
          },
        });
        const update = +hero.speed + 1;
        if (update <= 10) {
          await Hero.update({ speed: update }, {
            where: {
              userId: id,
            },
          });
          await User.update({ money: +user.money - 100 }, {
            where: {
              id,
            },
          });
          res.send({ speed: update });
        }
      } else {
        res.send({ status: false });
      }
    } catch (error) {
      console.log(error.message);
    }
  });

module.exports = routerHero;
