import faker from 'faker';
import db from '../db/connections.js';
import Post from '../models/post.js';

const insertData = async () => {
  await db.dropDatabase();

  const posts = [...Array(20)].map(post => {
    return {
      author: {
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        email: faker.internet.email(),
        bio: faker.lorem.sentence(),
      },
      content: {
        title: faker.lorem.sentence(),
        body: faker.lorem.paragraphs(),
        publishDate: faker.date.past(),
      },
    };
  });
  await Post.insertMany(posts);
  console.log('Created posts!');

  db.close();
};

insertData();
