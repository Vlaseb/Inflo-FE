import AsyncStorage from "@react-native-async-storage/async-storage";

export const BASE_URL = process.env.PUBLIC_API_URL;

export const serverError =
    "Server is down at the moment please try again later";

export const checkError = (error: unknown) => {
    if (error instanceof Error) {
        if (error.message === "Failed to fetch") {
            console.error(error);
            return {
                error: serverError
            };
        }
        console.error(error);
        return { error: error.message };
    }
};

const getAuthHeaders = async () => {
    const user = await AsyncStorage.getItem("@user");
    if (!user) return null;
    JSON.parse(user);
    return user;
};
