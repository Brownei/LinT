import { z } from "zod";
import { DataTypes } from 'sequelize';
import { sequelize } from "../../utils/database";
import User from "../users/model";
import Article from "../articles/model";

export const commentSchema = z.object({
    id: z.number().optional(),
    comment: z.string(),
    articleId: z.number(),
    userId: z.number(),
});

export type CommentType = z.infer<typeof commentSchema>;


//SEQUELIZE SCHEMA
const Comments = sequelize.define('Comments', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "You cannot send an empty comment",
            },
            len: [5, 256],
        },
    },
    articleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Article,
            key: 'id',
        },
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
});

export default Comments;