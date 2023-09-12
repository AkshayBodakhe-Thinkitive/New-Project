import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {persistStore, persistReducer} from 'redux-persist'
import rootReducer from './rootReducer'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { IAuth } from '../../domain/authentication/interfaces/AuthInterface'

export interface AppState  {
    auth : IAuth
}

const persistConfig = {
    key : 'root',
    storage : AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer : persistedReducer,
    middleware: [...getDefaultMiddleware()],
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const persistor = persistStore(store);

export {store, persistor}