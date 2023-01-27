import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'checking', 'not-authenticated' , 'authenticated'
        id: null,
        email: null,
        displayName: null,
        username: null,
        // employeeCode: null,
        // authenticationType: 2,
        errorMessage: null,
    },
    reducers: {
        onLogin: (state, { payload }) => {
            state.status = 'authenticated'; // 'checking', 'not-authenticated' , 'authenticated'
            state.id = payload.id;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.username = payload.username;
            // state.authenticationType = payload.authenticationType;
            // state.employeeCode = payload.employeeCode;
            state.errorMessage = null;
        },
        onLogout: (state, { payload }) => {
            state.status = 'not-authenticated'; // 'checking', 'not-authenticated' , 'authenticated'
            state.id = null;
            state.email = null;
            state.displayName = null;
            state.username = null;
            // state.employeeCode = null;
            // state.authenticationType = payload?.authenticationType;
            state.errorMessage = payload?.errorMessage ?? null;
        },
        onCheckingCredentials: (state) => {
            state.errorMessage = null;
            state.status = "checking";
        },
        onSetDisplayName:(state,{payload})=>{
            state.displayName=payload;
        }

    }
});
// Action creators are generated for each case reducer function
export const {
    onLogin,
    onLogout,
    onCheckingCredentials,
    onSetDisplayName
} = authSlice.actions;
//! https://react-redux.js.org/tutorials/quick-start