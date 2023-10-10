/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import app from "./firebase.config";
import{createUserWithEmailAndPassword,getAuth,onAuthStateChanged,signInWithEmailAndPassword,signOut,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    
   const googleSignIn = (value) => {
return signInWithPopup(auth,googleProvider);
   };
   const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);

   };
   const signIn = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password);
   }
   const logOut =()=>{
        return signOut(auth);
   }
   useEffect(() =>{
   const unSubscribe= onAuthStateChanged (auth,currentUser =>{
setUser(currentUser);
});
return () =>{
    unSubscribe();
}  
        
   },[]);
     const AuthInfo = {
        googleSignIn,
        user,
        createUser,
        signIn,
        logOut,
     };   
        return   ( 
        <AuthContext.Provider value={AuthInfo}>{children}

            </AuthContext.Provider>
        );

};

export default AuthProvider;