import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  //створення стану
  name: 'user',
  initialState: { users: [] }, //обєкт для визн.початкового стану
  reducers: {
    addUser(state, action) {
      //state(поточний стан),action(дія,яка спричинила зміну стану)
      state.users.push(action.payload);
    },
  }, // обєкт з фун=ями редуторамми які визн. як змінюється стан при обробці певних подій
  //у рнашому випадку ми додали редюсер який додає нового користувача до масиву users в стані. При виклику цієї дії,новий корист. буде доданий до списку корист. у стані Redux
}); // Після оголошення цього редуктора, ви можете експортувати його за допомогою userSlice.actions:

export const {addUser} = userSlice.actions; //цей рядокБ імпортує всі дії які згенерував createSlice, та експортує їх.
// Це дозволить  використовувати цю дію в інших частинах вашого додатка для додавання нового користувача до списку у стані Redux.

export const userReducer = userSlice.reducer; //Цей рядок export const userReducer = userSlice.reducer; використовується для експорту редуктора, який був створений за допомогою функції createSlice з бібліотеки @reduxjs/toolkit