// import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLogout, onSetDisplayName } from "../store/auth";

export const useCheckAuth = () => {

    const user= useSelector(state => state.auth);
    const {status,authenticationType,employeeCode,displayName } = user;
    const dispatch = useDispatch();
    useEffect(() => {
        const authUser = JSON.parse(localStorage.getItem('authUser'))
        const logged = !!authUser;
        
        if (!logged) {
         
            dispatch(onLogout());
        }
        else{
            dispatch(onLogin(authUser ));
        }
         
        // onAuthStateChanged(FirebaseAuth, async (user) => {
        //     if (!user) return dispatch(logout())

        //     const { uid, email, displayName, photoURL } = user;
        //     dispatch(login({ uid, email, displayName, photoURL }))
        // })


    }, [])

 
    
  
    return {
        status
    }
}
