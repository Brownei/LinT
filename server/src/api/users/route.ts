import { Router } from "express";
import { createNewUser, deleteUser, getOneUserDetails, updateUser } from "./handler";

const router = Router();

router.route('/')
    .post(createNewUser);

router.route('/:id')
    .get(getOneUserDetails)
    .delete(deleteUser)
    .put(updateUser);

export default router;