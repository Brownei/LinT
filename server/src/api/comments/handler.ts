import { NextFunction, Request, Response } from "express";
import logger from "../../utils/logger";
import { ZodError } from "zod";
import Comments, { CommentType } from "./model";
import Article, { Params } from "../articles/model";

export async function getAllComments(req: Request, res: Response, next: NextFunction) {
    try {
        const comments = await Comments.findAll({
            order: [['createdAt', 'DESC']],
        });

        return res.status(200).json(comments);
    } catch (error) {
        logger.info('Error in the create section');
        logger.error(error);
        if(error instanceof ZodError) {
            return res.status(422).json("Zod Error");
        }
        next(error);
    }
}

export async function getOneComment(req: Request<Params, {}, {}>, res: Response, next: NextFunction) {
    const { id } = req.params;
    
    try {
        const comment = await Article.findByPk(id);

        if(!comment) {
            return res.status(404).json("No commenrs like this");
        }

        return res.status(200).json(comment);
    } catch (error) {
        logger.info('Error in the create section');
        logger.error(error);
        if(error instanceof ZodError) {
            return res.status(422).json("Zod Error");
        }
        next(error);
    }
}

export async function createComment(req: Request<{}, {}, CommentType>, res: Response, next: NextFunction) {
    const { comment, articleId, userId } = req.body;
    
    try {
        const newComments = await Comments.create({
            comment,
            articleId,
            userId,
        });

        return res.status(201).json(newComments);
    } catch (error) {
        logger.info('Error in the create section');
        logger.error(error);
        if(error instanceof ZodError) {
            return res.status(422).json("Zod Error");
        }
        next(error);
    }
}