import { getUsers } from 'Redux/Users/selector';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, updateStatus } from 'Redux/Users/slice';

export const UsersPage = () => {
  const users = useSelector(getUsers);

  const dispatch = useDispatch();
 const deleteUserId = id => {
   dispatch(deleteUser(id));
 };
const onClickStatus = id => {
dispatch(updateStatus({id}))
}
  return (
    <>
    {users.length !== 0  ?  (
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
        {
          users.map(({ name, age, status,id },index) => (
            <tr key={id}>
              <td>{index +1}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>
                <span onClick={() => onClickStatus(id)}>{status}</span></td>
              <td>
                <button onClick={() => deleteUserId(id)}>Delete</button>
              </td>
            </tr>
          ))}
      </table>) : ( 
        <p>Not users</p>
      )} 
     
    </>
  );
};
