import { FloatButton, Spin } from 'antd'
import { Footer } from 'antd/es/layout/layout'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth'
import {  useCheckAuth } from '../hooks'
import { AppRoutes } from './routes/AppRoutes'
export const AppRouter = () => {
  // debugger
  const { status } = useCheckAuth();

  

  // if (status === 'checking')
  //   return <CheckingAuth />;
  const {BackTop} = FloatButton;
  return (
    <>
      <Spin size='small' spinning={status === 'checking'}>
        <Routes>

          {
            (status === 'authenticated')
              ? <Route path='/*' element={<AppRoutes />} />
              : <Route path='/auth/*' element={<AuthRoutes />} />
          }

          <Route path='/*' element={<Navigate to='/auth/login' />} />

          {/* <Route path='/login/*' element={
        <PublicRoute>
          <Routes>
            <Route path='/*' element={<LoginPage />} />
          </Routes>
        </PublicRoute>
      } />

      <Route path='/*' element={
        <PrivateRoute>
          <DemoRoutes />
        </PrivateRoute>
      } /> */}
        </Routes>

      </Spin>
      {/* <Footer>
        <AppFooter />
      </Footer> */}

      <BackTop />
    </>

  )
}
