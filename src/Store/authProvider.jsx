import {createContext,useContext,useEffect,useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
//import { AuthContext } from "./authContext";


 const AuthContext = createContext();

 export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    useEffect (() => {
        const unsubscribe = onAuthStateChanged(auth, setUser);
        return () => unsubscribe();
    }, []);

    return <AuthContext.Provider value={{user,setUser}}>{children} </AuthContext.Provider>

 };

 export const useAuth = () => useContext(AuthContext);



