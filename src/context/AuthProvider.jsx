import { createContext, useContext, useMemo, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({})
    const [logged, setLogged] = useState(false);
    const [isLogging, setIsLogging] = useState(false)

    const value = useMemo(() => {
        return {auth, setAuth, logged, setLogged, isLogging, setIsLogging};
    }, []);

    return (
        <AuthContext.Provider value={{auth, setAuth, logged, setLogged, isLogging, setIsLogging}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}