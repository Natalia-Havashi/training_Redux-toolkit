import { getUsers } from 'Redux/Users/selector';
import { useSelector } from 'react-redux';

export const UsersPage = () => {
  const users = useSelector(getUsers);
  //   console.log(users);
  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Age</th>
            <th>Status</th>
            <th>Option</th>
          </tr>
        </thead>
        {users &&
          users.map(({ name, age, status,id },index) => (
            <tr key={id}>
              <td>{index +1}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{status}</td>
              <td>
                <button type="button">Delete</button>
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};
