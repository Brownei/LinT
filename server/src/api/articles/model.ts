import { z } from "zod";

const date = new Date();
const comments = z.object({
    name: z.string(),
    content: z.string(),
    createdAt: z.date().default(date),
});
const articleSchema = z.object({
    id: z.number(),
    title: z.string().min(5, "Your title needs to be more than 5 characters!").max(30, "Your title cannot be more than 30 characters!"),
    content: z.string().min(5, "Your title needs to be more than 5 characters!"),
    author: z.string(),
    likes: z.number().default(0),
    comments: z.array(comments).nullable(),
});

export const paramSchema = z.object({
    id: z.number(),
});

export type Articles = z.infer<typeof articleSchema>;
export type Params = z.infer<typeof paramSchema>;