import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    Dispatch,
    SetStateAction,
    ReactNode
} from "react";

// Maybe move these into types
interface User {}

interface ContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
    isLoading: boolean;
}

const defaultContext: ContextType = {
    isLoggedIn: false,
    setIsLoggedIn: () => {},
    user: null,
    setUser: () => {},
    isLoading: true
};

interface GlobalProviderProps {
    children: ReactNode;
}

const GlobalContext = createContext<ContextType>(defaultContext);
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

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
                isLoading
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
