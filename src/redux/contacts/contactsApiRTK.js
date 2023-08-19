import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64d8bcfd5f9bf5b879ce839d.mockapi.io/api/v1',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: data => ({ url: '/contacts', method: 'POST', body: data }),
      invalidatesTags: ['Contacts'],
    }),
    removeContact: builder.mutation({
      query: id => ({ url: `/contacts/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Contacts'],
    }),
    editContact: builder.mutation({
      query: data => ({
        url: `/contacts/${data.id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useEditContactMutation,
  useRemoveContactMutation,
} = contactsApi;
