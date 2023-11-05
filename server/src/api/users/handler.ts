import { NextFunction, Request, Response } from "express";
import logger from "../../utils/logger";
import { ZodError } from "zod";
import User, { Params, UserType } from "./model";
import { hash } from 'bcrypt';
import Requests from "../requests/model";
import Post from "../posts/model";
import Likes from "../likes/model";

export async function createNewUser(req: Request<{}, {}, UserType>, res: Response, next: NextFunction) {
    const { firstName, lastName, email, password: pass, birthdayDate, profileImage } = req.body;

    try {
        if(!req.body) {
            return res.status(404).json("Missing information");
        }

        const existingUser = await User.findOne({
            where: {
                email,
            },
        });

        if(existingUser) {
            return res.status(409).json("User already exists!");
        }

        const hashedPassword = await hash(pass, 10);

        const newUser = await User.create({
            firstName, lastName, email, password: hashedPassword, birthdayDate, profileImage,
        });

        return res.status(201).json(newUser);

    } catch (error) {

        logger.info('Error in the create section');
        logger.error(error);
        if(error instanceof ZodError) {
            return res.status(422).json("Zod Error");
        }
        next(error);
    }
}

export async function deleteUser(req: Request<Params, {}, {}>, res: Response, next: NextFunction) {
    const { id } = req.params;

    try {
        if(!id) {
            return res.status(404).json("No parameter found!");
        }

        const existingUser = User.findByPk(id);

        if(!existingUser) {
            return res.status(409).json("No user like this");
        }

        await User.destroy({
            where: {
                id,
            },
        });

        return res.status(200).json("User deleted!");
    } catch (error) {
        logger.info('Error in the create section');
        logger.error(error);
        if(error instanceof ZodError) {
            return res.status(422).json("Zod Error");
        }
        next(error);
    }
}


export async function updateUser(req: Request<Params, {}, UserType>, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { firstName, lastName, email, password: pass, birthdayDate, profileImage } = req.body;

    try {
        if(!req.body) {
            return res.status(404).json("Missing data!");
        }

        if(!id) {
            return res.status(404).json("No parameter found!");
        }

        const existingUser = User.findByPk(id);

        if(!existingUser) {
            return res.status(409).json("No user like this");
        }

        const hashedPassword = await hash(pass, 10);

        await User.update({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            birthdayDate,
            profileImage,
        }, {
            where: {
                id,
            },
        });

        return res.status(200).json("User deleted!");
    } catch (error) {
        logger.info('Error in the create section');
        logger.error(error);
        if(error instanceof ZodError) {
            return res.status(422).json("Zod Error");
        }
        next(error);
    }
}

export async function getOneUserDetails(req: Request<Params, {}, {}>, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
        const existingUser = await User.findOne({
            where: {
                id,
            }, 
            include: [
                {
                    model: Requests,
                },
                {
                    model: Post,
                    include: [
                        {
                            model: Likes,
                        },
                        {
                            model: Requests,
                        },
                    ],
                },
            ],
        });

        if(!existingUser) {
            return res.status(200).json("No user like this!");
        }

        return res.status(200).json(existingUser);
    } catch (error) {
        logger.info('Error in the create section');
        logger.error(error);
        if(error instanceof ZodError) {
            return res.status(422).json("Zod Error");
        }
        next(error);
    }
}