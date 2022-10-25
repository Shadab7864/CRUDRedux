import { configureStore } from "@reduxjs/toolkit";
import addReducer from "./component/Slice";

const store=configureStore({
    reducer:{
        add:addReducer,
    },
});
export default store;