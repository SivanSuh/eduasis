import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import flashCardSlice from "./slices/flashCardSlice";

export const store = configureStore({
    reducer:{
        flashCard:flashCardSlice
    },
    middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck:false
    })
})


export type RootState = ReturnType<typeof store.getState>
export const AppDispatch :() => typeof store.dispatch = useDispatch