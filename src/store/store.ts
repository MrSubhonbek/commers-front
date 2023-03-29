import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE
} from 'redux-persist'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'

import { userSlice } from './user/user.slice'

const persistConfig = {
	key: 'e-cummers',
	storage,
	whitelist: ['cart']
}
const rootReducer = combineReducers({
	//cart: cartSlice.reducer,
	//carousel: carouselSlice.reducer
	user: userSlice.reducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export const persister = persistStore(store)
