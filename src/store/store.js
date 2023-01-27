import { configureStore } from "@reduxjs/toolkit";
import {  authSlice, authApi,   uiSlice } from "./";


export const store = configureStore({
    reducer:{
        auth:authSlice.reducer,
        [authApi.reducerPath]:authApi.reducer,
        ui:uiSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false
    })
    .concat(authApi.middleware)
})