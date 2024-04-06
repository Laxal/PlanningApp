import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const plannerApi = createApi( {
  reducerPath: 'plannerApi',
  baseQuery: fetchBaseQuery( {
    baseUrl: '',
  } ),
  endpoints: ( builder ) => ( {
    createUser: builder.mutation( {
      query: userData => ( {
        url: 'users/register',
        method: 'POST',
        body: userData
      })
    } ),
    loginUser: builder.mutation( {
      query: userData => ( {
        url: 'users',
        method: 'POST',
        body: userData
      })
    } ),
    getUser: builder.query( {
      query: userId => ( {
        url: `users/${ userId }`,
        method: 'GET',
      })
    } ),

    deleteUser: builder.mutation( {
      query: userId => ( {
        url: `users/${ userId }`,
        method: 'DELETE',
      })
    } ),
    updateUser: builder.mutation( {
      query: ({userId, userData}) => ( {
        url: `users/${ userId }`,
        method: 'PATCH',
        body: userData,
      })
    })
  })
} )

export const {
  useCreateUserMutation,
  useDeleteUserMutation,
  useGetUserQuery,
  useLoginUserMutation,
  useUpdateUserMutation
} = plannerApi;