import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import recipesSlice from "./slices/recipes-slice";

export const store = configureStore({
    reducer: {
        recipes: recipesSlice
    },
    devTools: true
})

type StoreType = typeof store;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppRootStateType = ReturnType<StoreType['getState']>;