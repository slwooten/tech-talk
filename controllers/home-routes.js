const router = require('express').Router();
const { Blog, User } = require('../models');

// route to get all blogs //
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: {
        model: User, attributes: { exclude: ["password"] } 
      }
    })
      
    res.json(blogData);

  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;
