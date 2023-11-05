import { z } from "zod";
import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../../utils/database";
import User from "../users/model";
import Requests from "../requests/model";
import Likes from "../likes/model";

export const postSchema = z.object({
    id: z.number().optional(),
    userId: z.number().optional(),
    title: z.string().min(5, "Your title needs to be more than 5 characters!").max(30, "Your title cannot be more than 30 characters!"),
    description: z.string().min(5, "Your description needs to be more than 5 characters!"),
    techStacks: z.string().nullable(),
    problem: z.string().min(5, "Your problem statement should be more than 5 characters!").nullable(),
    solution: z.string().min(5, "Your solution should be more than 5 characters!").nullable(),
    requirements: z.string().nullable(),
    isPaid: z.boolean().default(false),
});
export const paramSchema = z.object({
    id: z.number(),
});

export type PostType = z.infer<typeof postSchema>;
export type Params = z.infer<typeof paramSchema>;



//SEQUELIZE MODEL
const Post = sequelize.define<Model<PostType>>('Post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5, 30],
        },
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    techStacks: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    problem: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    solution: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    requirements: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    isPaid: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
            model: User,
            key: 'id',
        },
    },
},
    {
        indexes: [{ fields: ['id'] }],
    },
);

export default Post;

// Post.belongsTo(User, { foreignKey: 'userId' });
Post.hasMany(Requests, { foreignKey: 'postId' });
Post.hasMany(Likes, { foreignKey: 'postId' });