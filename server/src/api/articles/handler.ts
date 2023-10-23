import { Request, Response, NextFunction } from "express";
import logger from "../../utils/logger";
import { databasePool } from "../../utils/database";
import { Articles, Params } from "./model";
import { ZodError } from "zod";

export async function getAllArticles(req: Request, res: Response, next: NextFunction) {
    try {
        const articles = await databasePool.query("SELECT * FROM articles ORDER BY id DESC");
        console.log(articles[0]);
        return res.status(200).json(articles[0]);
    } catch (error) {
        logger.info('Error in getting all articles');
        logger.error(error);
        next(error);
    }
}

export async function createArticle(req: Request<{}, {}, Articles>, res: Response, next: NextFunction) {
    const { title, content, author, likes, comments } = req.body;
    try {
        const newArticle = await databasePool.query(
            `
                INSERT INTO articles (
                    title,
                    content,
                    author,
                    likes,
                    comments
                ) VALUES (?, ?, ?, ?, ?)
            `, [title, content, author, likes, comments],
        );
        
        console.log(newArticle[0]);
        return res.status(201).json(`Article: ${title} is created!`);
    } catch (error) {
        logger.info('Error in getting all articles');
        logger.error(error);
        next(error);
    }
}

export async function deleteArticle(req: Request<Params, {}, {}>, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
        const particularArticle = await databasePool.query(
            `
                SELECT * FROM articles
                    WHERE id = ${id}
            `,
        );

        if(!particularArticle) {
            return res.status(404).json("No article like this");
        }

        await databasePool.query(
            `
                DELETE FROM articles WHERE id = ${id};
            `,
        );

        return res.status(200).json(`${particularArticle[0]} is successfully deleted!`);
    } catch (error) {
        logger.info('Error in deleting an article');
        logger.error(error);
        if(error instanceof ZodError) {
            res.status(422).json("Zod Error");
        }
        next(error);
    }
}