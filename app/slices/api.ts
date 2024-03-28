import { Action, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

type RootState = any;

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts",
    }),
    getPostById: builder.query<Post, string>({
      query: (id) => `/posts/${id}`,
    }),
    getCommentsByPostId: builder.query<Comment[], string>({
      query: (postId) => `/comments?postId=${postId}`,
    }),
  }),
});

//CSR endpoints
export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetCommentsByPostIdQuery,
  util: { getRunningQueriesThunk },
} = api;

//SSR endpoints
export const { getCommentsByPostId, getPostById, getPosts } = api.endpoints;
