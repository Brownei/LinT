import { z } from "zod";
import { sequelize } from "../../utils/database";
import { DataTypes, Model } from "sequelize";
import User from "../users/model";
import Post from "../posts/model";

const likeSchema = z.object({
    id: z.number().optional(),
    userId: z.number().optional(),
    postId: z.number().optional(),
    liked: z.boolean().default(true),
});
export type LikesType = z.infer<typeof likeSchema>;

const Likes = sequelize.define<Model<LikesType>>('Likes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    liked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
    postId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
            model: Post,
            key: 'id',
        },
    },
}, 
    {
        indexes: [{ fields: ['id'] }],
    },
);

export default Likes;