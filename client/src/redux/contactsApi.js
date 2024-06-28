import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const transformResponses = {
  transformResponse: (response) => response.data,
  transformErrorResponse: (response) => response.data,
};

export const contactsApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/",
  }),
  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: (params) => `contacts/${params}`,
      ...transformResponses,
    }),
    getOneContact: builder.query({
      query: (contactId) => `contacts/${contactId}`,
      ...transformResponses,
    }),
    addContact: builder.mutation({
      query: (body) => ({
        url: "contacts",
        method: "POST",
        body,
      }),
      ...transformResponses,
    }),
    updateContact: builder.mutation({
      query: (contactId, body) => ({
        url: `contacts/${contactId}`,
        method: "PUT",
        body,
      }),
      ...transformResponses,
    }),
    setFavorite: builder.mutation({
      query: (contactId, body) => ({
        url: `contacts/${contactId}/favorite`,
        method: "PATCH",
        body,
      }),
      ...transformResponses,
    }),
    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `contacts/${contactId}`,
        method: "DELETE",
      }),
      ...transformResponses,
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useGetOneContactQuery,
  useAddContactMutation,
  useUpdateContactMutation,
  useSetFavoriteMutation,
  useDeleteContactMutation,
} = contactsApi;
