import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { FeedBackProvider } from './context'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme'
import { FirebaseNotification } from './ui'

import 'react-toastify/dist/ReactToastify.css';
export const DemoApp = () => {
  // debugger

  return (
      <FeedBackProvider>
        <AppTheme>
          <ToastContainer
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
          />
          <FirebaseNotification />
          <AppRouter />
        </AppTheme>

      </FeedBackProvider>
  )
}
