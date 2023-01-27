import React, { useState } from 'react'
import { toast } from "react-toastify";
import { onMessageListener } from '../../firebase';
export const FirebaseNotification = () => {
  const [notification, setNotification] = useState({ title: '', body: '' });
  const ToastDisplay = ({title,body}) =>
  (<div>
    <h4>{title}</h4>
    <p>{body}</p>
  </div>)
  onMessageListener()
    .then((payload) => {

      setNotification({ title: payload?.notification?.title, body: payload?.notification?.body });
      toast.info(<ToastDisplay title={payload?.notification?.title} body={payload?.notification?.body} />);
    })
    .catch((err) => console.log('failed: ', err));
}
