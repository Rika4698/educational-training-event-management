/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext } from "react";
import app from "./firebase.config";
import{createUserWithEmailAndPassword,getAuth,onAuthStateChanged,signInWithEmailAndPassword,signOut,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const gooogleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    
   const googleSignIn = (value) => {
return signInWithPopup(auth,gooogleProvider);
   };
     const AuthInfo = {
        googleSignIn,
     };   
        return   ( 
        <AuthContext.Provider value={AuthInfo}>{children}

            </AuthContext.Provider>
        );

};

export default AuthProvider;