import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios';
export const authApi = createApi({
    reducerPath: 'authApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dev.bona.com.do:9797/api/v1',
        prepareHeaders: (headers, { getState }) => {
            // const token = getState().auth.token
            // const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImhpYiIsIm5hbWVpZCI6ImMyYjRhNmY3LWI3M2EtNGE1MC1hOTZhLWIzY2IxOGZhZTQ2YyIsInNlY3JldEtleSI6Ijg0ZTJmMzVjLWY5YWItNGJjZi1iYmI3LTY2MzdmNzgzNWVhNyIsImp0aSI6ImYxNmUwZTU4LTg4NTQtNDVlOS1iOGYwLWRkYTU2MDk0NThkNCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjcxMzE0ODIyfQ.pogliFIuDvmxnzKA5UY-1Q3crxfdvYxRBWFuPq2xYBk`;


            // // If we have a token set in state, let's assume that we should be passing it.
            // if (token) {
            //   headers.set('Authorization', `Bearer ${token}`)
            // }
            // console.log(headers)

            return headers
        }

    }),
    endpoints: (builder) => ({
        getSideBarMenu: builder.query({
            query: (username) => `/adm/menu/${username}/3`
        }),
        loginByUser: builder.mutation({
            query: (credentials) => ({
                url: 'activedirectory/login/hib/HubB0n4*',
                method: 'post',
                body: credentials,
            })

        })
    })
})

export const { useGetSideBarMenuQuery, useLoginByUserMutation } = authApi;

export const axiosAuthApi = axios.create({
    baseURL: 'https://dev.bona.com.do:9797/api/v1',

})


axiosAuthApi.interceptors.response.use(
    response => {
        const { status, statusText } = response;
        const { Messages, Data, IsSuccessStatusCode } = response.data;

        return {
            status,
            statusText,
            data: Data,
            messages: Messages,
            isSuccessStatusCode: IsSuccessStatusCode
        }
    },
    error => {
        let status, statusText, Errors=null, IsSuccessStatusCode=false;
        if (error.response) {
            ({ status, statusText } = error);
            ({ Errors, IsSuccessStatusCode } = error.response.data);
        }
        else {
            status = error.code;
            statusText = error.message
            Errors=[{ Message: error.message, StatusError: error.code }];
            IsSuccessStatusCode=false;
        }
        throw {
            isSuccessStatusCode: IsSuccessStatusCode,
            statusText,
            statusCode: status,
            details:  Errors.map(error => {
                return {
                    message: error.Message,
                    statusError: error.StatusError,
                    description: error.Description,
                    stackTrace: error.StackTrace
                };
            }) 
        }
    },
)