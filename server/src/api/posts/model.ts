import { z } from "zod";

const name = z.string();
export const postSchema = z.object({
    id: z.number(),
    title: z.string().min(5, "Your title needs to be more than 5 characters!").max(30, "Your title cannot be more than 30 characters!"),
    description: z.string().min(5, "Your description needs to be more than 5 characters!"),
    tech_stacks: z.string().nullable(),
    problem_to_solve: z.string().min(5, "Your problem statement should be more than 5 characters!").nullable(),
    solution: z.string().min(5, "Your solution should be more than 5 characters!").nullable(),
    requirements: z.array(name).nullable(),
    is_paid: z.boolean().default(false),
});
export const paramSchema = z.object({
    id: z.number(),
});

export type Posts = z.infer<typeof postSchema>;
export type Params = z.infer<typeof paramSchema>;