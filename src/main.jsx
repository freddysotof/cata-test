import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { DemoApp } from './DemoApp'
import './style.css'
import './assets/scss/index.scss'
// if('serviceWorker' in navigator){
//   navigator.serviceWorker.register('../firebase-messaging-sw.js',{scope:'./'})
//   .then((registration)=>{
//     console.log('Registration successful, scope is: ',registration.scope);
//   })
//   .catch((err)=>console.error('Service worker registration failed, error: ',err))
// }
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter >
        <DemoApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
