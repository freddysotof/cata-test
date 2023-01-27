import { FloatButton } from 'antd'
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { HomePage } from '../../home/pages/HomePage'
import { AppLayout } from '../../layout/AppLayout'

// const {BackTop} = FloatButton;
export const AppRoutes = () => {
    return (

        <AppLayout
            appName={"Self Services App"}
            style={{ height: '100% !important' }}
            // style={{height:'500vh !important'}}
        >
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/*' element={<Navigate to="/" />}></Route>
            </Routes>
   
        </AppLayout>
        

    )
}
