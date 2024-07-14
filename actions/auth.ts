import { BASE_URL, checkError } from "@/lib/fetchUtils";

type signInParams = {
    email: string;
    password: string;
};

export const signIn = async (body: signInParams) => {
    try {
        const response = await fetch(`${BASE_URL}/signin`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            const errMsg = await response.json();
            throw new Error(errMsg.detail);
        }
        return await response.json();
    } catch (error) {
        return checkError(error);
    }
};

export const signUp = async (body: signInParams) => {
    try {
        const response = await fetch(`${BASE_URL}/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            const errMsg = await response.json();
            throw new Error(errMsg.detail);
        }
        return await response.json();
    } catch (error) {
        return checkError(error);
    }
};
