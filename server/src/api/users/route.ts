import { Router } from "express";
import { createNewUser, deleteUser, updateUser } from "./handler";

const router = Router();

router.route('/')
    .post(createNewUser);

router.route('/:id')
    .delete(deleteUser)
    .put(updateUser);

export default router;