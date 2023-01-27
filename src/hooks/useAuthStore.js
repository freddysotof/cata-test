import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosAuthApi,  onCheckingCredentials, onLogout, onLogin,  onSetDisplayName } from "../store";

const petitionHandler = {
    appCode: 'hr-ss',
    data: {}
}
export const useAuthStore = () => {
    const authState = useSelector(state => state.auth);
    const
        {
            username,
            employeeCode,
            displayName,
            status,
            errorMessage,
            authenticationType,
            id,
            email,
        } = authState
    const dispatch = useDispatch();

    const startLogin = async (credentials) => {
        dispatch(onCheckingCredentials())
        let resp = {};
        resp = await new Promise((resolve,reject) => {
            return resolve
            ( {
                statusCode: 200,
                isSuccessStatusCode: true,
                data: {
                    id:1,
                    email:'', 
                    displayName:'', 
                    username :''

                }
            });
        });
        console.log(resp);

        if (resp) {

            if (!resp.isSuccessStatusCode) {
                dispatch(onLogout({ errorMessage: resp.errorMessage }));
            } else {
                localStorage.setItem('authUser',JSON.stringify(resp.data));
                dispatch(onLogin(resp.data))
            }
        } else
            dispatch(onLogout({ errorMessage: 'Error de autenticacion' }));
    }


    const startLogout = async () => {
        try {
            localStorage.clear();
            dispatch(onLogout())
        } catch (error) {

        }
    }

    const startSetDisplayName = (displayName) => {
        dispatch(onSetDisplayName(displayName));
    }

    return {
        //* Propiedades
        username,
        employeeCode,
        displayName,
        status,
        errorMessage,
        authenticationType,
        id,
        email,
        //* Metodos
        startLogin,
        startLogout,
        startSetDisplayName
    }
}