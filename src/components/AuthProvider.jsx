import { createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const [user,setUser]=useState(null)
    const [loading,setLoading]= useState(true)
    const handleRegister = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const handleLogin = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const handleGoogleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const manageProfile = (name,image)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,photoURL:image
         })
     }
    const handleLogout=()=>{
        signOut(auth);
    }

    const authInfo ={
        handleRegister,
        handleLogin,
        handleGoogleLogin,
        handleLogout,
        manageProfile,
        user,
        setUser,
        loading
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            // console.log(currentUser);
            if(currentUser){
                setUser(currentUser)   
            }
            else{
                setUser(null)
            }
            setLoading(false)
            return()=>{
                unsubscribe()
            }
        })
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;