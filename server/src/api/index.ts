import express from 'express';
import posts from '../api/posts/posts.route';
import MessageResponse from '../interfaces/MessageResponse';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'Connected successfully!',
  });
});

router.use('/posts', posts);

export default router;
