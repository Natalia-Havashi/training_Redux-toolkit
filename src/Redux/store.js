//Store - це центральне місце зберігання стану (даних) вашого додатку у бібліотеці Redux.
// Він є об'єктом, який містить всю інформацію про стан вашого додатку та забезпечує механізм для зміни цього стану через дії (actions)
//та редуктори (reducers).

//configureStore допомагає створити головний об'єкт Redux-стору та налаштувати його опції для зручної розробки та використання.

import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './Users/slice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';


const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
