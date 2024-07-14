export const BASE_URL = process.env.PUBLIC_API_URL;

export const serverError =
    "Server is down at the moment please try again later";

export const checkError = (error: unknown) => {
    if (error instanceof Error) {
        if (error.message === "Failed to fetch") {
            return {
                error: serverError
            };
        }
        return { error: error.message };
    }
};
