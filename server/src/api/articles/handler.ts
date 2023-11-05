import { Request, Response, NextFunction } from "express";
import logger from "../../utils/logger";
import Article, { ArticleType, Params } from "./model";
import { ZodError } from "zod";

export async function getAllArticles(req: Request, res: Response, next: NextFunction) {
    try {
        const articles = await Article.findAll({
            order: [['createdAt', 'DESC']],
        });
        
        return res.status(200).json(articles);
    } catch (error) {
        logger.info('Error in updating an article');
        logger.error(error);
        if(error instanceof ZodError) {
            return res.status(422).json("Zod Error");
        }
        next(error);
    }
}

export async function getOneArticle(req: Request<Params, {}, {}>, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
        const article = await Article.findByPk(id);
        return res.status(200).json(article);
    } catch (error) {
        logger.info('Error in updating an article');
        logger.error(error);
        if(error instanceof ZodError) {
            return res.status(422).json("Zod Error");
        }
        next(error);
    }
}

export async function createArticle(req: Request<{}, {}, ArticleType>, res: Response, next: NextFunction) {
    const { title, content, userId } = req.body;
    try {
        const newArticle = await Article.create({
            title,
            content,
            userId,
        });
        
        return res.status(201).json(newArticle);
    } catch (error) {
        logger.info('Error in updating an article');
        logger.error(error);
        if(error instanceof ZodError) {
            return res.status(422).json("Zod Error");
        }
        next(error);
    }
}

export async function deleteArticle(req: Request<Params, {}, {}>, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
        const particularArticle = await Article.findByPk(id);

        if(!particularArticle) {
            return res.status(404).json("No article like this");
        }

        await Article.destroy({
            where: {
                id,
            },
        });

        return res.status(200).json(`${particularArticle} is successfully deleted!`);
    } catch (error) {
        logger.info('Error in deleting an article');
        logger.error(error);
        if(error instanceof ZodError) {
            return res.status(422).json("Zod Error");
        }
        next(error);
    }
}

export async function updateArticle(req: Request<Params, {}, ArticleType>, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { title, content, userId } = req.body;
    
    try {
        const particularArticle = await Article.findByPk(id);

        if(!particularArticle) {
            return res.status(404).json("No article like this");
        }

        await Article.update({
            title,
            content,
            userId,
        }, {
            where: {
                id,
            },
        });

        return res.status(200).json(`${particularArticle} is successfully updated!`);
    } catch (error) {
        logger.info('Error in updating an article');
        logger.error(error);
        if(error instanceof ZodError) {
            return res.status(422).json("Zod Error");
        }
        next(error);
    }
}