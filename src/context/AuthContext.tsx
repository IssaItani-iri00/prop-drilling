import {createContext, useContext, useState, type ReactNode, type JSX} from "react";

interface User {
    name: string;
}

interface AuthContextType {
    user: User | null;
    login: (username: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: ReactNode}): JSX.Element => {
    const [user, setUser] = useState<User | null>(null);

    const login = (username: string): void => {
        setUser({name: username});
    };

    const logout = (): void => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value = {{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("Error");
    }

    return context;
};