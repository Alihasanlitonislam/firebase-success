import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../../Firebase/Firebase';
export const AuthContext = createContext(null)
const auth = getAuth(app);
const DaynamickLink = ({children}) => {
    const [user, setUser] = useState('')
    const [loding, setLoding]= useState(true)
    const createRegisterWidthSingUp = (email, password)=>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const registerLogin = (email, password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const registerLogOut = ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubcire = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoding(false)
        });
        return()=>{
            return unSubcire()
        };
    },[])
    const authInfo = {
        user,
        loding,
        createRegisterWidthSingUp,
        registerLogin,
        registerLogOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default DaynamickLink;