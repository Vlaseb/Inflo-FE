import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    Dispatch,
    SetStateAction,
    ReactNode
} from "react";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri } from "expo-auth-session";
import { router } from "expo-router";
import { googleSignIn, signIn, updateToken } from "@/actions/auth";

WebBrowser.maybeCompleteAuthSession();

interface User {
    id: string;
    name: string;
    email: string;
    picture: string;
}
interface ConnectedUser {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    access_token: string;
    refresh_token: string;
    access_token_expires_in: number;
}

interface ContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
    user: ConnectedUser | null;
    setUser: Dispatch<SetStateAction<ConnectedUser | null>>;
    isLoading: boolean;
    signInWithGoogle: () => void;
    signOut: () => void;
}

const defaultContext: ContextType = {
    isLoggedIn: false,
    setIsLoggedIn: () => {},
    user: null,
    setUser: () => {},
    isLoading: true,
    signInWithGoogle: () => {},
    signOut: () => {}
};

interface GlobalProviderProps {
    children: ReactNode;
}

const GlobalContext = createContext<ContextType>(defaultContext);
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [user, setUser] = useState<ConnectedUser | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId:
            "1034060721609-huaak2fgq8htl6kgtemod79sn961i2dp.apps.googleusercontent.com",
        redirectUri: makeRedirectUri({
            scheme: "com.anonymous.inflo",
            path: "/home"
        })
    });

    useEffect(() => {
        const checkUser = async () => {
            const storedUser = await AsyncStorage.getItem("@user");
            if (storedUser) {
                setUser(JSON.parse(storedUser));
                setIsLoggedIn(true);
                console.log("Google Logged Account:");
                console.log(storedUser);
            }
            setIsLoading(false);
        };

        checkUser();
    }, []);

    useEffect(() => {
        if (response?.type === "success") {
            getUserInfo(response.authentication?.accessToken);
        }
    }, [response]);

    const getUserInfo = async (token?: string) => {
        if (token === undefined) return;
        try {
            const res = await fetch(
                "https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
            const user = await res.json();

            const dbUser = await googleSignIn(user);
            await AsyncStorage.setItem("@user", JSON.stringify(dbUser));

            setUser(dbUser);
            setIsLoggedIn(true);
        } catch (error) {
            console.log("ERROR:", error);
        }
    };

    const signInWithGoogle = () => {
        promptAsync();
    };

    const update = async () => {
        const data = await updateToken(user?.refresh_token);
        if (data.error) return signOut();
        setUser((prev) => {
            return { ...prev, access_token: data.access_token };
        });
        await AsyncStorage.setItem("@user", JSON.stringify(user));
    };

    useEffect(() => {
        if (isLoading) {
            update();
        }
        const fourMinutes = 1000 * 60 * 4; // access_token_expiry
        const interval = setInterval(() => {
            if (user) {
                update();
            }
        }, fourMinutes);
        return () => clearInterval(interval);
    }, []);

    const signOut = async () => {
        await AsyncStorage.removeItem("@user");
        setUser(null);
        setIsLoggedIn(false);

        router.replace("/");
    };

    // THIS WILL USE FUNCTIONS FROM ./lib
    // useEffect(() => {
    //     getCurrentUser()
    //       .then((res) => {
    //         if (res) {
    //           setIsLogged(true);
    //           setUser(res);
    //         } else {
    //           setIsLogged(false);
    //           setUser(null);
    //         }
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       })
    //       .finally(() => {
    //         setLoading(false);
    //       });
    //   }, []);

    return (
        <GlobalContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
                user,
                setUser,
                isLoading,
                signInWithGoogle,
                signOut
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
