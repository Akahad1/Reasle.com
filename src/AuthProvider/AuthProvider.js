import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../fairebase.config';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from 'react';

  
export const auth=getAuth(app)
const provider = new GoogleAuthProvider();
export const AuthContext =createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState('')
    const [loding,setLoding]=useState(true)


    // create Eamil password
    const createEamilPassword=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // LoginWith Google

    const logInGoogle=() =>{
        return signInWithPopup(auth, provider)


    }
    // Login
    const logIn =(email,password)=>{
      return  signInWithEmailAndPassword(auth, email, password)

    }

    // logOut
    const logOut=()=>{
        return signOut(auth)

    }

    // updateProfile

    const profileUpdate=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }
    // abserver

    useEffect(()=>{
        const unSubcriber =onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log(currentUser)
            setLoding(false)
        })
        return ()=> unSubcriber

    },[])
     
    const authInfo ={
        user,
        createEamilPassword,
        logOut,
        logInGoogle,
        profileUpdate,
        logIn,
        loding,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;