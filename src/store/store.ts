import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import employersSlice from "./employersSlice";

export const store = configureStore({
    reducer: {
        usersSlice,
        employersSlice,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
