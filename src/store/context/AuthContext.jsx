import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../Auth";
import { createContext,useEffect,useState } from "react";



export const AuthContext=createContext();

export const  AuthProvider=({children})=>{


const [user,setUser]=useState(null);

const [loading,setLoading]=useState(true);

useEffect(()=>{
    const unsub=onAuthStateChanged(auth,(currUser)=>{
setUser(currUser);
setLoading(false)
    })
return ()=> unsub();
},[])


    return (<>
    <AuthContext.Provider value={{user,loading,setLoading}}>
        {children}
    </AuthContext.Provider>
    </>)
}
