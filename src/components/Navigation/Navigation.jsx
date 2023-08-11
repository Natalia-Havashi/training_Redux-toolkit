import { Link } from "./Navigation.styled"

export const Navigation = () => {
return (
    <>
    <nav>
       <ul>
        <li>
            <Link to='/'>Users</Link>
        </li>
        <li>
            <Link to='add'>Add user</Link>
        </li>
    </ul>  
    </nav>
   
    </>
)
}