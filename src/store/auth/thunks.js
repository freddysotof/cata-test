// import { useSelector } from "react-redux";
// import { authBonaApi } from "../api";
// import { onLogout as onLogoutLeaves } from "../leave";
// import { onCheckingCredentials, onLogin, onLogout } from "./authSlice";

// const petitionHandler = {
//   appCode: 'hr-ss',
//   data: {}
// }

// // const activeDirectorySignIn = async (credentials) => {
// //   let resp = {}, errorMessage, authUser;

// //   try {
// //     petitionHandler.data = { username: credentials.user, password: credentials.password };
// //     ({ data: resp } = await authBonaApi
// //       .post('activedirectory/authenticate', petitionHandler))

// //   } catch (error) {
// //     if (!!error.response)
// //       ({ data: resp = data } = error.response);
// //     else {
// //       resp.IsSuccessStatusCode = false;
// //       resp.StatusCode = 500;
// //       resp.Errors = [{ Message: error.message, StatusError: error.message }];
// //     };
// //   }
// //   if (resp.IsSuccessStatusCode) {
// //     const [first, ...rest] = resp.Data;
// //     authUser = {
// //       id: first.Id,
// //       email: first.Email,
// //       displayName: first.DisplayName,
// //       username: first.UserName,
// //       authenticationType: 1,
// //       employeeCode: first.EmployeeCode
// //     }
// //   } else {
// //     const [first, ...rest] = resp.Errors;
// //     errorMessage = first.Message && first.Message.length > 2 ? first.Message : first.StatusError;
// //   }
// //   return {
// //     authUser,
// //     errorMessage,
// //     isSuccessStatusCode: resp.IsSuccessStatusCode,
// //     statusCode: resp.StatusCode
// //   }
// // }

// // const adminSignIn = async (credentials) => {
// //   let resp = {}, errorMessage, authUser;

// //   try {
// //     petitionHandler.data = { username: credentials.user.toString(), password: credentials.password };
// //     ({ data: resp } = await authBonaApi
// //       .post('adm/authenticate', petitionHandler))
// //   } catch (error) {
// //     // console.log(error)
// //     if (!!error.response) {
// //       ({ data: resp = data } = error.response);
// //     }
// //     else {
// //       resp.IsSuccessStatusCode = false;
// //       resp.Errors = [{ Message: error.message, StatusError: error.message }];
// //       resp.StatusCode = 500;
// //     };

// //   }
// //   if (resp.IsSuccessStatusCode) {
// //     const [first, ...rest] = resp.Data;
// //     authUser = {
// //       id: first.Id,
// //       email: first.Email,
// //       displayName: first.DisplayName,
// //       username: first.UserName,
// //       employeeCode: first.EmployeeCode,
// //       authenticationType: 2
// //     }

// //   } else {
// //     const [first, ...rest] = resp.Errors;
// //     errorMessage = first.Message && first.Message.length > 2 ? first.Message : first.StatusError;
// //   }
// //   return {
// //     authUser,
// //     errorMessage,
// //     isSuccessStatusCode: resp.IsSuccessStatusCode,
// //     statusCode: resp.StatusCode
// //   }
// // }


// // export const startLogin = (credentials) => {
// //   return async (dispatch) => {
// //     dispatch(onCheckingCredentials())
// //     let resp = {};
// //     resp = await adminSignIn(credentials);

// //     if (resp) {
// //       if (resp.statusCode === 406 || resp.statusCode === 500) {
// //         resp = await activeDirectorySignIn(credentials);
// //       }


// //       if (!resp.isSuccessStatusCode) {
// //         if (resp.statusCode === 400 || resp.statusCode === 500)
// //           dispatch(onLogout({ errorMessage: resp.errorMessage }));
// //       } else {
// //         localStorage.setItem('authUser', JSON.stringify(resp.authUser));
// //         dispatch(onLogin(resp.authUser))
// //       }
// //     } else
// //       dispatch(onLogout({ errorMessage: 'Error de autenticacion' }));

// //     // else if(resp.isSuccessStatusCode && resp.statusCode===400 )
// //     // const [first, ...rest] = resp.Data;
// //     // const authUser = {
// //     //   id: null,
// //     //   email: null,
// //     //   displayName: null,
// //     //   username: first.UserName,
// //     //   employeeCode: null,
// //     //   authenticationType: 2
// //     // }
// //     // localStorage.setItem('authUser', JSON.stringify(authUser));
// //     // 
// //   }
// //   // console.log(responseFromLoginByEmployeecode);
// //   // }
// // }


// // export const startLogout = ({ authenticationType }) => {
// //   return async (dispatch) => {
// //     try {
// //       localStorage.removeItem('authUser')
// //       dispatch(onLogoutLeaves());
// //       dispatch(onLogout({ authenticationType }))
// //     } catch (error) {

// //     }

// //   }
// // }