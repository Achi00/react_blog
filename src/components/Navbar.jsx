import React from 'react'
import { Link } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom'
import logo from '../img/logo.svg'



const Navbar = ({ isAuth, setIsAuth }) => {
    const signUserOut = () => {
        signOut(auth)
           .then(() => {
            localStorage.clear();
            setIsAuth(false)
            window.location.pathname = '/login'
           }
        )
    }

  return (
    <div className='nav'>
      <div className="logo">
        <img width={100} src={logo} alt="" />
      </div>
        <Link style={{textDecoration: 'none'}} to="/">Home</Link>
        {!isAuth ? 
        <Link style={{textDecoration: 'none'}} to="/login">Log In</Link> : 
        <>
        <Link style={{textDecoration: 'none'}} to="/create">create post</Link>
        <button onClick={signUserOut}>Log Out</button>
        </>
        }
    </div>
  )
}

export default Navbar