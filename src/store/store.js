import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import Post from "../pages/Post";

export const store = configureStore({
    reducer: {
        auth: auth,
        //ADD more slices here posts
    }
});
export default store
