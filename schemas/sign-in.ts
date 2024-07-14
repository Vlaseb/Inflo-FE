import { z } from "zod";
import { passwordSchema } from "./password";

export const signInFormSchema = z.object({
    email: z.string().email(),
    password: passwordSchema
});

export type signInFormType = z.infer<typeof signInFormSchema>;

export const signInDefaultValues = {
    email: "",
    password: ""
};
