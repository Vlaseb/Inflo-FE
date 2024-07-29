import { z } from "zod";
import { passwordSchema } from "./password";

export const signUpFormSchema = z
    .object({
        first_name: z.string().min(1).max(30),
        last_name: z.string().min(1).max(30),
        email: z.string().email(),
        password: passwordSchema,
        confirmPassword: passwordSchema
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
        if (confirmPassword !== password) {
            ctx.addIssue({
                code: "custom",
                message: "The passwords did not match",
                path: ["confirmPassword"]
            });
        }
    });

export type signUpFormType = z.infer<typeof signUpFormSchema>;

export const signUpDefaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: ""
};
