const router = require('express').Router();
const { User, Chat } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    try {
        const chats = await Chat.findAll({
          include: {
          raw: true,
          model: User,
          attributes: ['id', 'name'],
          }, 
          order: [
              ['id', 'DESC'],
            ],
        });
  
        res.status(200).json({ chats });
      } catch (e) {
        res.status(502).json({ message: e.message });
      }
  });

router.route('/')
  .post(async (req, res) => {
    try {
      const chat = Chat.create({
        user_id: res.locals.user.id,
        message: req.body.message,
      });
    } catch (error) {
      res.status(502).json({ message: e.message });
    }
  });

module.exports = router;
