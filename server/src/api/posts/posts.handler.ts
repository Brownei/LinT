import { databasePool } from '../../utils/database';
import { NextFunction, Request, Response } from "express";
import logger from '../../utils/logger';
import { Posts } from './posts.model';

export async function getAllPosts(res: Response, next: NextFunction) {
    try {
        const db = await databasePool.query("SELECT * FROM posts");
        console.log(db[0]);
        res.status(200).json(db[0]);
    } catch (error) {
        logger.info('Error in the create');
        logger.error(error);
        next(error);
    }
}

export async function createPosts(req: Request<{}, {}, Posts>, res: Response<Posts | string>, next: NextFunction) {
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
        res.status(200).json(`${title} is created!`);
    } catch (error) {
        logger.info('Error in the create');
        logger.error(error);
        next(error);
    }
}