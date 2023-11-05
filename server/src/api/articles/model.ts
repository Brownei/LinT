import { z } from "zod";
import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../../utils/database";
import User from "../users/model";


export const articleSchema = z.object({
    id: z.number().optional(),
    title: z.string().min(5, "Your title needs to be more than 5 characters!").max(30, "Your title cannot be more than 30 characters!"),
    content: z.string().min(5, "Your title needs to be more than 5 characters!"),
    userId: z.number(),
});

export const paramSchema = z.object({
    id: z.number(),
});

export type ArticleType = z.infer<typeof articleSchema>;
export type Params = z.infer<typeof paramSchema>;


//SEQUELIZE SCHEMA
const Article = sequelize.define<Model<ArticleType>>('Article', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Title for the article is needed",
            },
            len: [5, 30],
        },
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Your article needs to its content, right?",
            },
        },
    },
});

export default Article;