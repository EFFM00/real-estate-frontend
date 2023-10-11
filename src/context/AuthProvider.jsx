import { createContext, useContext, useMemo, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({})
    const [logged, setLogged] = useState(false)

    const value = useMemo(() => {
        return {auth, setAuth, logged, setLogged};
    }, []);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}