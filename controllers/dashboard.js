const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

//When user is logged in, they can see all posts they've made
router.get('/', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [{
                model: Comment,
                include: {
                    model: User
                }
            }]
        })

        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        res.render('dashboard', {
            blogs,
            logged_in: true
        })

    } catch (err){
        console.log(err)
        res.status(500).json(err);
    }
})


// Renders the create-blog.handlebars file
router.get('/create-blog', (req,res) => {
    res.render('create-blog');
})

// Retrives the 'blog-update' page with the selected blog information rendered.
router.get('/blog-update/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findOne({
            where :{
                id: req.params.id
            },
            include: [{ model: User}, { model: Comment }],
        })

        const blog = blogData.get({ plain: true });

        res.render('blog-update', blog)

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

module.exports = router
