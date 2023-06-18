import { createContext } from "react";
import  { Iprops }  from "./protocolls"

export const AuthContext = createContext({})

export default function ProviderContext({children}: Iprops) {
        


    return ( 
        <AuthContext.Provider value={{  }}>
            {children}
        </AuthContext.Provider>
    )

}