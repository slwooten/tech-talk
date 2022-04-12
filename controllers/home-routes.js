const router = require('express').Router();
const Blog = require('../models/Blog');

// route to get all blogs //
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll()
      
    res.json(blogData);

  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;
