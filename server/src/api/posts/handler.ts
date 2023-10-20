import { databasePool } from '../../utils/database';
import { Request, Response, NextFunction } from "express";
import logger from '../../utils/logger';
import { Params, Posts } from './model';
import { ZodError } from 'zod';

export async function getAllPosts(req: Request, res: Response, next: NextFunction) {
    try {
        const posts = await databasePool.query("SELECT * FROM posts ORDER BY id DESC");
        console.log(posts[0]);
        return res.status(200).json(posts[0]);
    } catch (error) {
        logger.info('Error in getting all posts');
        logger.error(error);
        if(error instanceof ZodError) {
            res.status(422).json("Zod Error");
        }
        next(error);
    }
}

export async function createPost(req: Request<{}, {}, Posts>, res: Response<Posts | string>, next: NextFunction) {
    const { title, description, tech_stacks, problem_to_solve, solution, requirements, is_paid } = req.body;
    try {
        if(!req.body) {
            res.status(404).json('Missing information!');
        }
        const newPost = await databasePool.query(
            `
                INSERT INTO posts (title, description, tech_stacks, problem, solution, requirements, is_paid)
                    VALUES (${title}, ${description}, ${tech_stacks}, ${problem_to_solve}, ${solution}, ${requirements}, ${is_paid})
            `,
        );

        console.log(newPost);
        return res.status(201).json(`${title} is created!`);
    } catch (error) {
        logger.info('Error in the create section');
        logger.error(error);
        if(error instanceof ZodError) {
            res.status(422).json("Zod Error");
        }
        next(error);
    }
}

export async function getOnePost(req: Request<Params, {}, {}>, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
        const particularPost = await databasePool.query(
            `
                SELECT * FROM posts
                    WHERE id = ${id}
            `,
        );
        console.log(particularPost[0]);
        res.status(200).json(particularPost[0]);
    } catch (error) {
        logger.info('Error in getting only one post');
        logger.error(error);
        if(error instanceof ZodError) {
            res.status(422).json("Zod Error");
        }
        next(error);
    }
}

export async function deleteOnePost(req: Request<Params, {}, {}>, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
        const particularPost = await databasePool.query(
            `
                SELECT * FROM posts
                    WHERE id = ${id}
            `,
        );

        if(!particularPost) {
            return res.status(404).json("No post like this");
        }

        await databasePool.query(
            `
                DELETE FROM posts WHERE id = ${id};
            `,
        );

        return res.status(200).json(`${particularPost[0]} is successfully deleted!`);
    } catch (error) {
        logger.info('Error in deleting a post');
        logger.error(error);
        if(error instanceof ZodError) {
            res.status(422).json("Zod Error");
        }
        next(error);
    }
}

export async function updateOnePost(req: Request<Params, {}, Posts>, res: Response, next: NextFunction) {
    const { title, description, tech_stacks, problem_to_solve, solution, requirements, is_paid } = req.body;
    const { id } = req.params;
    try {
        const particularPost = await databasePool.query(
            `
                SELECT * FROM posts
                    WHERE id = ${id}
            `,
        );

        if(!particularPost) {
            return res.status(404).json("No post like this");
        }

        await databasePool.query(
            `
                UPDATE posts
                SET title = ${title}, description = ${description}, tech_stacks = ${tech_stacks}, problem = ${problem_to_solve}, solution = ${solution}, requirements = ${requirements}, is_paid = ${is_paid}
                WHERE id = ${id};
            `,
        );

        return res.status(200).json(`${particularPost[0]} is successfully updated!`);
    } catch (error) {
        logger.info('Error in updating a post');
        logger.error(error);
        if(error instanceof ZodError) {
            res.status(422).json("Zod Error");
        }
        next(error);
    }
}