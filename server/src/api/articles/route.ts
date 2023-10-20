import { Router } from 'express';
import { getAllArticles, createArticle } from './handler';

const router = Router();

router.route('/')
    .get(getAllArticles)
    .post(createArticle);

export default router;