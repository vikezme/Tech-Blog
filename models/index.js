const User = require('./User');
const Comment = require('./Comment');
const Blog = require('./Blog');

//User can have many Blog (posts)
User.hasMany(Blog, {
   constraints:false,
   foreignKey: 'user_id',
})

//A Blog (post) will only belong to one User
Blog.belongsTo(User, {
    constraints:false,
   foreignKey: "user_id",
   onDelete: "cascade"
})

//A Blog may have many Comments
Blog.hasMany(Comment, {
    constraints:false,

   foreignKey: 'blog_id',
   onDelete: 'cascade'
})

Comment.belongsTo(Blog, {
    constraints:false,

    foreignKey: 'blog_id',
    onDelete: 'cascade'
})

User.hasMany( Comment, {
    constraints:false,

    foreignKey: 'user_id',
    onDelete: "cascade"
})

Comment.belongsTo(User, {
    constraints:false,

    foreignKey: 'user_id',
    onDelete: "cascade"
})

module.exports = { User, Comment, Blog};
