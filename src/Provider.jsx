import { createContext } from "react";

export const AuthContext = createContext(null);

const Provider = ({children}) => {

 
    const userInfo={
 nam:'jani na ',

    }

    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}

            </AuthContext.Provider>
            
        </div>
    );
};

export default Provider;