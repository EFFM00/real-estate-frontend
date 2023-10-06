import { createContext, useContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {

    const [logged, setLogged] = useState(login)

    console.log(children);
    return <UserContext.Provider value={User}>{children}</UserContext.Provider>
}

export const useUser = () => {
    return useContext(UserContext)
}