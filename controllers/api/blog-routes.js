const router = require('express').Router();
const { Blog, User } = require('../../models');

// route for creating new blog post //
router.post('/', async (req, res) => {
  try {
    const blogData = await Blog.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.body.user_id,
    });

    res.status(200).json(blogData);

  } catch (err) {
    res.status(500).json(err);
  };
});

// route for getting one blog by id // 
router.get('/:id', async (req, res) => {
  try {
    const oneBlog = await Blog.findByPk(req.params.id, {
      include: {
        model: User, attributes: { exclude: ["password"] }
      }
    });

    res.status(200).json(oneBlog);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;