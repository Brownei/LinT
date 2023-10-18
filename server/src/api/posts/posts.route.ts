import { Router } from 'express';
import { getAllPosts } from './posts.handler';

const router = Router();

router.route('/')
    .get(getAllPosts);

export default router;
