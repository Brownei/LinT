import { Router } from "express";
import { acceptRequest, createRequest, rejectRequest } from "./handler";

const router = Router();

router.route('/')
    .post(createRequest);

router.route("/:id")
    .put(acceptRequest)
    .patch(rejectRequest);

export default router;