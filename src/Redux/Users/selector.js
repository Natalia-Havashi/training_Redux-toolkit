//Селектори - це функції, які використовуються для вибору конкретних частин стану з Redux-стору. 
//Вони дозволяють абстрагувати деталі структури стану та забезпечують спрощений доступ до потрібних даних для компонентів.

//Цей селектор приймає Redux-стор (об'єкт стану) як аргумент і повертає частину цього стану - конкретно, об'єкт users. 
//Це означає, що ви можете використовувати цей селектор в компонентах, щоб отримати список користувачів зі стану, 
//необхідний для відображення або взаємодії з ними.
export const getUsers = store => store.users;