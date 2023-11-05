import { Request, Response, NextFunction } from "express";
import logger from '../../utils/logger';
import Post, { Params, PostType } from './model';
import { ZodError } from 'zod';
import Likes from "../likes/model";
import Requests from "../requests/model";
// import User from "../users/model";

export async function getAllPosts(req: Request, res: Response, next: NextFunction) {
    try {
        const posts = await Post.findAll({
            include: [
                {
                    model: Likes,
                },
                {
                    model: Requests,
                },
            ],
        });

        return res.status(200).json(posts);
    } catch (error) {
        logger.info('Error in getting all posts');
        logger.error(error);
        if(error instanceof ZodError) {
            return res.status(422).json("Zod Error");
        }
        next(error);
    }
}

export async function createPost(req: Request<{}, {}, PostType>, res: Response, next: NextFunction) {
    const { title, description, techStacks, problem, solution, requirements, isPaid, userId } = req.body;
    try {
        if(!req.body) {
            res.status(404).json('Missing information!');
        }
        const newPost = await Post.create({
            title, 
            description, 
            techStacks, 
            problem, 
            solution, 
            requirements, 
            isPaid, 
            userId,
        });

        return res.status(201).json(newPost);
    } catch (error) {
        logger.info('Error in the create section');
        logger.error(error);
        if(error instanceof ZodError) {
            return res.status(422).json("Zod Error");
        }
        next(error);
    }
}

export async function getOnePost(req: Request<Params, {}, {}>, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
        const particularPost = await Post.findOne({
            where: {
                id,
            },
            include: [
                {
                    model: Requests,
                    attributes: ['accepted', 'rejected', 'id'],
                },
                {
                    model: Likes,
                    attributes: ['liked', 'id'],
                },
            ],
        });

        if(!particularPost) {
            return res.status(404).json("No posts like this");
        }

        return res.status(200).json(particularPost);
    } catch (error) {
        logger.info('Error in getting only one post');
        logger.error(error);
        if(error instanceof ZodError) {
            return res.status(422).json("Zod Error");
        }
        next(error);
    }
}

export async function deleteOnePost(req: Request<Params, {}, {}>, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
        const particularPost = await Post.findByPk(id);

        if(!particularPost) {
            return res.status(404).json("No post like this");
        }

        await Post.destroy({
            where : {
                id,
            },
        });

        return res.status(200).json(`${particularPost} is successfully deleted!`);
    } catch (error) {
        logger.info('Error in deleting a post');
        logger.error(error);
        if(error instanceof ZodError) {
            res.status(422).json("Zod Error");
        }
        next(error);
    }
}

export async function updateOnePost(req: Request<Params, {}, PostType>, res: Response, next: NextFunction) {
    const { title, description, techStacks, problem, solution, requirements, isPaid } = req.body;
    const { id } = req.params;
    try {
        const particularPost = await Post.findByPk(id);

        if(!particularPost) {
            return res.status(404).json("No post like this");
        }

        await Post.update({
            title,
            description,
            techStacks,
            problem,
            solution,
            requirements,
            isPaid,
        }, {
            where: {
                id,
            },
        });

        return res.status(200).json(`${particularPost} is successfully updated!`);
    } catch (error) {
        logger.info('Error in updating a post');
        logger.error(error);
        if(error instanceof ZodError) {
            return res.status(422).json("Zod Error");
        }
        next(error);
    }
}