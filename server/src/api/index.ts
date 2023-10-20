import express from 'express';
import posts from './posts/route';
import articles from './articles/route';
import MessageResponse from '../interfaces/MessageResponse';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'Connected successfully!',
  });
});

router.use('/posts', posts);
router.use('/articles', articles);

export default router;
