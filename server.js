import db from './db/connections.js';
import postRoutes from './routes/posts.js';

import express from 'express';
import cors from 'cors';
import logger from 'morgan';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(logger('dev'));

app.use('/api', postRoutes);

db.on('connected', () => {
  console.log('Connected to MongoDB!');
  app.listen(PORT, () => console.log(`Express server application is running on port ${PORT}`));
});
