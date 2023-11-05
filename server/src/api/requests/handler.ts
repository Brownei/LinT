import { NextFunction, Request, Response } from "express";
import logger from "../../utils/logger";
import { ZodError } from "zod";
import Requests, { RequestBody, RequestType } from "./model";
import { Op } from "sequelize";
import User, { Params } from "../users/model";
import Post from "../posts/model";

export async function getAllRequests(req: Request<{}, {}, RequestType>, res: Response, next: NextFunction) {
    const { userId } = req.body;

    try {
        const currentUser = await User.findByPk(userId);

        if(!currentUser) {
            return res.status(404).json("No current user present!");
        }

        const notAnsweredRequests = await Requests.findOne({
            where: {
                userId,
                
            },
        });

        if(!notAnsweredRequests) {
            return res.status(404).json("Everyone is avioding you!");
        }

        return res.status(200).json(notAnsweredRequests);
    } catch (error) {
        logger.info('Error in the create section');
        logger.error(error);
        if(error instanceof ZodError) {
            return res.status(422).json("Zod Error");
        }
        next(error);
    }
}

export async function createRequest(req: Request<{}, {}, RequestType>, res: Response, next: NextFunction) {
    const { userId, postId } = req.body;

    try {
        const existingRequest = await Requests.findOne({
            where: {
                [Op.and] : [
                    { userId },
                    { postId },
                ],
            },
        });

        if(existingRequest) {
            return res.status(409).json("A request has already been sent!");
        }

        const ownerOfPost = await Post.findOne({
            where: {
                id: postId,
                userId,
            },
        });

        if(ownerOfPost) {
            return res.status(409).json("You cannot send a request for your own post");
        }

        const newRequest = await Requests.create({
            userId,
            postId,
        });

        return res.status(201).json(newRequest);
    } catch (error) {
        logger.info('Error in the create section');
        logger.error(error);
        if(error instanceof ZodError) {
            return res.status(422).json("Zod Error");
        }
        next(error);
    }
}

export async function acceptOrRejectRequest(req: Request<Params, {}, RequestBody>, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { userId, postId, options } = req.body;

    try {
        const existingRequest = await Requests.findByPk(id);

        if(!existingRequest) {
            return res.status(404).json("No request like this avialable!");
        }

        const acceptedOrRejected = await Requests.findOne({
            where: {
                id,
                [Op.or] : [
                    { accepted: true },
                    { rejected: true },
                ],
            },
        });

        if(acceptedOrRejected) {
            return res.status(409).json("Request is already accepted or rejected");
        }

        const ownerOfPost = await User.findByPk(userId);

        if(!ownerOfPost) {
            return res.status(404).json("No user like this!");
        }

        const currentOwnerOfPost = await Post.findOne({
            where: {
                id: postId,
                userId,
            },
        });

        if(!currentOwnerOfPost) {
            return res.status(404).json("You are not the owner of this posts");
        }

        if(options === 'No') {
            await Requests.update({
                rejected: true,
            }, {
                where: {
                    id,
                },
            });

            return res.status(200).json("Request Rejected!");
        }

        await Requests.update({
            accepted: true,
        }, {
            where: {
                id,
            },
        });

        return res.status(200).json("Request Accepted!");
    } catch (error) {
        logger.info('Error in the create section');
        logger.error(error);
        if(error instanceof ZodError) {
            return res.status(422).json("Zod Error");
        }
        next(error);
    }
}