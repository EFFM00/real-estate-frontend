import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const token = !!localStorage.getItem("token");
    const [logged, setLogged] = useState(token);
    const [isLogging, setIsLogging] = useState(false)

    return (
        <AuthContext.Provider value={{logged, setLogged, isLogging, setIsLogging}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}