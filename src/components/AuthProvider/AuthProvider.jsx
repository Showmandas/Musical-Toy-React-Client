/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { updateProfile, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from '../../firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    //registration
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //login
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
     //update profile 
     const updateData = (user, name, photoUrl) => {
        return updateProfile(user, {
            displayName: name,
            photoURL: photoUrl
        })
            .then(() => {
                console.log('user update')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    //google sign in
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
   
    //logout
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser)
            setLoading(false);
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = {
        user,
        createUser,
        logInUser,
        logOutUser,
        googleSignIn,
        loading,
        updateData,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;