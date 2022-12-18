import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./postSlice";
import todoSlice from "./todoSlice";


export const store = configureStore({
    reducer: {
        todo: todoSlice,
        post: postSlice
    }
});