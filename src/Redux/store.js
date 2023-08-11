//Store - це центральне місце зберігання стану (даних) вашого додатку у бібліотеці Redux. 
// Він є об'єктом, який містить всю інформацію про стан вашого додатку та забезпечує механізм для зміни цього стану через дії (actions) 
//та редуктори (reducers).

//configureStore допомагає створити головний об'єкт Redux-стору та налаштувати його опції для зручної розробки та використання.

import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Users/slice";

export const store = configureStore({
    reducer: userReducer,
})

