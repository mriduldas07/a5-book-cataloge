/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { api } from "../../api/apiSlice";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `/books`,
    }),
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    addComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/comment/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
    getComment: builder.query({
      query: (id) => `/books/comment/${id}`,
      providesTags: ["comments"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useAddCommentMutation,
  useGetCommentQuery,
} = booksApi;
