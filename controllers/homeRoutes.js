const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const blogData = await Blog.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });

      // Serialize data so the template can read it
      const blogs = blogData.map((blog) => blog.get({ plain: true }));

      // Pass serialized data and session flag into template
      res.render('homepage', {
        blogs,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //If user is already logged in, they are redirected to homepage
  router.get('/login', (req, res) => {
      if (req.session.logged_in) {
          res.redirect('/');
          return;
      }
      res.render('login');
  })

    //If user is already logged in, they are redirected to homepage
  router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
      res.render('signup')
  })

  // When selecting a Blog-Post to add a comment
  router.get('/blog-post-info/:id', withAuth, async (req,res) => {
    try {
            const blogData = await Blog.findByPk(req.params.id, {
                include: [{ model: User},  {model: Comment, include: { model: User, attributes: ['username']}}]
              })

              //When the relevan blog selected gets loaded into 'blog-post-info'
              const blog = blogData.get({ plain: true });
              res.render('blog-post-info', blog);

        }  catch (err) {
            res.status(500).json(err);
        }
})

module.exports = router;
