const router = require('express').Router();
const commentRoutes = require('./commentRoutes');
const blogRoutes = require('./blogRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;
