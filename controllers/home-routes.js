const router = require('express').Router();
const { Blog, User } = require('../models');

// route to get all blogs //
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: {
        model: User, attributes: { exclude: ["password"] }
      }
    });

    const blogs = blogData.map((blog) =>
      blog.get({ plain: true })
    );
    res.render('homepage', { blogs });

  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;
