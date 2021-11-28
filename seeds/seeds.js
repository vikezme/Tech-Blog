const sequelize = require('../config/connection');

const seedUser = require('./user-seeds');
const seedBlog = require('./blog-seeds');
const seedComment = require('./comment-seeds');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedUser();
  await seedBlog();
  await seedComment();

  process.exit(0);
};

seedDatabase();
