import { z } from "zod";
import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../../utils/database";
import Post from "../posts/model";
import Requests from "../requests/model";
import Likes from "../likes/model";

const userSchema = z.object({
    id: z.number().optional(),
    firstName: z.string().min(5, "Your firstname should be up to 5 characters!"),
    lastName: z.string().min(5, "Your lastname should be up to 5 characters!"),
    email: z.string().email(),
    password: z.string().min(8, "Your password should be up to 8 characters"),
    birthdayDate: z.date(),
    profileImage: z.string().nullable(),
});

const paramSchema = z.object({
    id: z.number(),
});
export type UserType = z.infer<typeof userSchema>;
export type Params = z.infer<typeof paramSchema>;


const User = sequelize.define<Model<UserType>>('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Enter your first name please",
            },
            notNull: {
                msg: "Enter your first name please",
            },
        },
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Enter your last name please",
            },
            notNull: {
                msg: "Enter your last name please",
            },
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "Enter your email please",
            },
            notNull: {
                msg: "Enter your email please",
            },
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Enter your password please",
            },
            notNull: {
                msg: "Enter your password please",
            },
        },
    },
    birthdayDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    profileImage: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, 
    {
        indexes: [{ fields: ['id'] }],
    },
);

export default User;

User.hasMany(Post, { foreignKey: 'userId' });
User.hasMany(Requests, { foreignKey: 'userId' });
User.hasMany(Likes, { foreignKey: 'userId' });