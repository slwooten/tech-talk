const router = require('express').Router();
const { User, Blog } = require('../../models');

// route for creating a new user //
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

// route for getting one user by id //
router.get('/:id', async (req, res) => {
  try {
    const oneUser = await User.findByPk(req.params.id, {
      include: {
        model: Blog
      }
    });

    oneUser.password = undefined;

    res.status(200).json(oneUser);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;