import { AnyAction, ThunkDispatch, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {persistStore} from 'redux-persist'
import persistReducer from 'redux-persist/es/persistReducer';
import rootReducer from './rootReducer'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { IAuth } from '../../domain/authentication/interfaces/AuthInterface'

export interface AppState  {
    auth : IAuth,
    screen : any,
    nav :any
}

const persistConfig = {
    key : 'root',
    storage : AsyncStorage,
    whitelist: ['auth'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false,
  });
  

const store = configureStore({
    reducer : persistedReducer,
    devTools: true,
    middleware: [...customizedMiddleware],
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
export const useAppDispatch= () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const persistor = persistStore(store);

export {store, persistor}