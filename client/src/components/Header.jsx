import React,{useContext} from 'react'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import {Link,useNavigate} from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';



function Header() {

    const { isLoggedIn, logout } = useContext(AuthContext);
    const navigate=useNavigate() 
    function handleLogout(){
        logout();
        navigate('/')
    }
  return (
    <div className="bg-danger text-white py-4">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="" className="nav-link text-white">Home</Link>
        </li>

        {isLoggedIn ? (
          <>
            <li className="nav-item">
              <Link to="donate" className="nav-link text-white">Donate Blood</Link>
            </li>
            <li className="nav-item">
              <Link to="request" className="nav-link text-white">Request Blood</Link>
            </li>
            <li className="nav-item">
              <button onClick={handleLogout} className="btn btn-link nav-link text-white">Logout</button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link to="register" className="nav-link text-white">Register</Link>
            </li>
            <li className="nav-item">
              <Link to="login" className="nav-link text-white">Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

export default Header