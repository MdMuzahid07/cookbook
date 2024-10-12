/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { getCurrentUser } from "@/services/AuthService";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";


const UserContext = createContext<IUserProvider | undefined>(undefined);

interface IUserProvider {
    user: any | null;
    isLoading: boolean | undefined;
    setUser: (user: any | null) => void;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
};


const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    const handleUser = async () => {
        const user = await getCurrentUser();
        setUser(user as any);
        setIsLoading(false);
    };


    useEffect(() => {
        handleUser();
    }, [isLoading]);


    return (
        < UserContext.Provider
            value={{ user, setUser, isLoading, setIsLoading }}
        >
            {children}
        </ UserContext.Provider >
    )
};



export const useUser = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error("useUser must be use within the UserProvider context");
    }

    return context;
};



export default UserProvider;