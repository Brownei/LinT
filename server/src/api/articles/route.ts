import { Router } from 'express';
import { getAllArticles, createArticle, deleteArticle, updateArticle, getOneArticle } from './handler';

const router = Router();

router.route('/')
    .get(getAllArticles)
    .post(createArticle);

router.route('/:id')
    .get(getOneArticle)
    .delete(deleteArticle)
    .put(updateArticle);

export default router;