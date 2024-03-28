import { configureStore } from "@reduxjs/toolkit";
import { api } from "../app/slices/api";
// import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// export const wrapper = createWrapper(store);
