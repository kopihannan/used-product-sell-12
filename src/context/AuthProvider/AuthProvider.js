import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext(); 
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    //create user with email pass
    const registerForm = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //signin user
    const loginForm = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    //update profile 
    const updateProfileUser = (name, imgUrl) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: imgUrl,
        })
    }

    //Google Provider login 
    const googleProvider = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    //state change user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser)
        })

        return () => {
            unSubscribe();
        }
    }, [])

    //Logout user
    const userLogout = () => {
        setLoading(true)
        return signOut(auth)
    }


    const authInfo = {
        loading,
        setLoading,
        user,
        registerForm, 
        loginForm,
        userLogout,
        updateProfileUser,
        googleProvider
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;