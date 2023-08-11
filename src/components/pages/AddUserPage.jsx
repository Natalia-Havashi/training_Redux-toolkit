import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addUser } from 'Redux/Users/slice'; 

export const AddUserPage = () => {
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [age, setAge] = useState(localStorage.getItem('age') || '');

  const dispatch = useDispatch(); //хук використовується в компонентах, щоб здійснювати зміни стану та взаємодіяти з Redux-стором.
//Основна роль dispatch полягає у відправленні дій до стору для того, щоб змінити стан додатку.
const navigate = useNavigate();
  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'age') {
      setAge(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
        name,
        age,
        id: nanoid(),
        status: 'offline'
    }
    dispatch(addUser(newUser)); // відбувається відправлення дії до Redux-стору з метою додавання нового користувача. 
    //після діспачу цьоі діі,нам потрібно переадресовувати користувача на сторінку з користувачами
     navigate('/')
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
            Name
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
            Age
          <input type="number" name="age" onChange={handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    </>
  );
};
