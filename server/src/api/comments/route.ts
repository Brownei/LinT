import { Router } from "express";
import { getAllComments, getOneComment, createComment } from "./handler";

const router = Router();

router.route('/')
    .get(getAllComments)
    .post(createComment);

router.route('/:id')
    .get(getOneComment);

export default Router;