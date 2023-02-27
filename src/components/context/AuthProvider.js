import { createContext, useState } from "react";


const AuthContext = createContext({}); //empty context

//hands the value (aka the AuthState to all children)
export const AuthProvider = ({children}) =>{ //children are the components nested in the provider
    const [auth, setAuth] = useState({})
    return(
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;