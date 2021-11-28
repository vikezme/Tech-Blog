const { Comment } = require('../models');

const commentData = [
    {
      content: "this is a comment #1",
      blog_id: 1,
      user_id: 3
    },
    {
      content: "this is a comment #2",
      blog_id: 2,
      user_id: 3
    },
    {
      content: "this is a comment #3",
      blog_id: 3,
      user_id: 2
    }
  ];

  const seedComment = () => Comment.bulkCreate(commentData);

  module.exports = seedComment;
