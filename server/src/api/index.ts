import express from 'express';
import users from './users/route';
import posts from './posts/route';
import articles from './articles/route';
import comments from './comments/route';
import requests from './requests/route';
import likes from './likes/route';
import MessageResponse from '../interfaces/MessageResponse';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'Connected successfully!',
  });
});

router.use("/user", users);
router.use('/posts', posts);
router.use('/articles', articles);
router.use('/comments', comments);
router.use('/requests', requests);
router.use('/likes', likes);

export default router;