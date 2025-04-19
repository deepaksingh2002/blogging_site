import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";


export const store = configureStore({
    reducer: {
        auth: auth,
        //ADD more slices here posts
    }
});
export default store
