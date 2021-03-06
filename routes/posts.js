import { Router } from 'express';
import * as controllers from '../controllers/posts.js';

const router = Router();

router.get('/posts', controllers.getPosts);
router.get('/posts/:id', controllers.getOnePost);
router.post('/posts', controllers.createPost);
router.put('/posts/:id/edit', controllers.updatePost);
router.delete('/posts/:id', controllers.deletePost);

export default router;
