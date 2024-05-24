import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contact-hub-46b8.onrender.com/api/",
  }),
  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: () => "contacts/",
      transformErrorResponse: (error) => {
        return error.data;
      },
    }),
  }),
});

export const { useGetAllContactsQuery } = contactsApi;
