import { NextFunction, Request, Response } from "express";
import { Params } from "../articles/model";
import { RequestBody } from "../requests/model";
import logger from "../../utils/logger";
import { ZodError } from "zod";
import Likes from './model';
import User from "../users/model";
import Post from "../posts/model";

export async function likeOrUnlikeAPost(req: Request<Params, {}, RequestBody>, res: Response, next: NextFunction) {
    const { userId, postId } = req.body;

    try {
        const currentUser = await User.findByPk(userId);

        if(!currentUser) {
            return res.status(404).json("No user like this!");
        }

        const currentPostToBeLiked = await Post.findByPk(postId);

        if(!currentPostToBeLiked) {
            return res.status(404).json("No post like this!");
        }

        const existingLikes = await Likes.findOne({
            where: {
                userId,
                postId,
                liked: true,
            },
        });

        if(existingLikes) {
            await Likes.destroy({
                where: {
                    userId,
                    postId,
                },
            });

            return res.status(201).json("Post unliked");
        }

        await Likes.create({
            userId,
            postId,
            liked: true,
        });

        return res.status(201).json("Post liked");

    } catch (error) {
        logger.info('Error in the create section');
        logger.error(error);
        if(error instanceof ZodError) {
            return res.status(422).json("Zod Error");
        }
        next(error);
    }
}