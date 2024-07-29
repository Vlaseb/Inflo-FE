import { BASE_URL, checkError } from "@/lib/fetchUtils";

type signInParams = {
    email: string;
    password: string;
};

export const signIn = async (body: signInParams) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
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

type signUpParams = {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    confirmPassword: string;
};

export const signUp = async (body: signUpParams) => {
    const { email, password, first_name, last_name } = body;
    try {
        const response = await fetch(`${BASE_URL}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password, first_name, last_name })
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

type User = {
    id: string;
    name: string;
    email: string;
    picture: string;
};

export const googleSignIn = async (body: User) => {
    const { name, email, id: google_id } = body;
    try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, google_id })
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
