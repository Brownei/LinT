import { Router } from "express";
import { acceptOrRejectRequest, createRequest, getAllRequests } from "./handler";

const router = Router();

router.route('/')
    .post(createRequest);

router.route('/attention-needed')
    .post(getAllRequests);

router.route("/:id")
    .put(acceptOrRejectRequest);

export default router;