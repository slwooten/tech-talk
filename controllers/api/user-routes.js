const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      user_name: req.body.user_name,
      password: req.body.password,
    });

    res.status(200).json(userData);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;