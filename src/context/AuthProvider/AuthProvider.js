import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    //create user with email pass
    const registerForm = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //signin user
    const loginForm = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //update profile 
    const updateProfileUser = (name, imgUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: imgUrl,
        })
    }

    //Google Provider login 
    const googleProvider = (provider) => {
        return signInWithPopup(auth, provider)
    }

    //state change user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => {
            unSubscribe();
        }
    }, [])

    //Logout user
    const userLogout = () => {
        return signOut(auth)
    }


    const authInfo = {
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