import { Router } from "express";
import { likeOrUnlikeAPost } from "./handler";

const router = Router();

router.route('/')
    .post(likeOrUnlikeAPost);

export default router;