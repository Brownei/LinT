import { Router } from 'express';
import { getAllPosts, createPost, getOnePost, deleteOnePost, updateOnePost } from './handler';

const router = Router();

router.route('/')
    .get(getAllPosts)
    .post(createPost);

router.route('/:id')
    .get(getOnePost)
    .delete(deleteOnePost)
    .put(updateOnePost);

export default router;
