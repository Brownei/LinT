import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../../utils/database";
import { z } from 'zod';
import Post from '../posts/model';
import User from '../users/model';

export const requestParams = z.object({
    id: z.number().optional(),
    userId: z.number().optional(),
    postId: z.number().optional(),
    accepted: z.boolean().default(false).optional(),
    rejected: z.boolean().default(false).optional(),
});

export type RequestType = z.infer<typeof requestParams>;
export type RequestBody = {
    userId: number;
    postId?: number;
    options?: 'Yes' | 'No';
};


//SEQUELIZE MODEL
const Requests = sequelize.define<Model<RequestType>>('Requests', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    accepted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    rejected: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
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
export default Requests;

// Requests.belongsTo(User);
// Requests.belongsTo(Post);
