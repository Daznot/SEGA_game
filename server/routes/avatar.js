const router = require('express').Router();
const path = require('path');
const Multer = require('multer');

const { User } = require('../db/models');
const { access, AUTHENTICATED } = require('../middlewares/access');

router.route('/')
  .post(access(AUTHENTICATED), async (req, res) => {
    const storage = Multer.diskStorage({
      destination: function(req, file, cb) {
          cb(null, path.resolve('uploads/'));
      },
      // By default, multer removes file extensions so let's add them back
      filename: function(req, file, cb) {
        const dotIndex = file.originalname.lastIndexOf('.');
        const filename = res.locals.user.id + file.originalname.slice(dotIndex);
        cb(null, filename);
      }
    });

    const fileFilter = function(req, file, cb) {
      // Accept images only
      if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.mimetype)) {
        req.fileValidationError = 'Only jpeg/png/gif are allowed!';
        return cb(new Error('Only jpeg/png/gif are allowed!'), false);
      }
      if (!(/\.(jpg|jpeg|png|gif)$/i).test(file.originalname)) {
          req.fileValidationError = 'Only image files are allowed!';
          return cb(new Error('Only image files are allowed!'), false);
      }
      cb(null, true);
    };

    let upload = Multer({ storage, fileFilter }).single('avatar');

    upload(req, res, async (e) => {
      // req.file contains information of uploaded file
      // req.body contains information of text fields, if there were any

      if (req.fileValidationError) {
        return res.status(500).json({ message: req.fileValidationError });
      }
      else if (!req.file) {
        return res.status(500).json({ message: 'Please select an image to upload!' });
      }
      else if (e instanceof Multer.MulterError) {
        return res.status(500).json({ e });
      }
      else if (e) {
        return res.status(500).json({ e });
      }

      // Display uploaded image for user validation
      res.status(200).json({ message: 'You have uploaded this image!' });
    });
  });

module.exports = router;
