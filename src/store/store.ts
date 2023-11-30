import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import flashCardSlice from "./slices/flashCardSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key:"root",
    storage
}

const persistedReducer = persistReducer(persistConfig,flashCardSlice)

export const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck:false
    })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export const AppDispatch :() => typeof store.dispatch = useDispatch