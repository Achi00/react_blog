import React from 'react'
import { auth, provider } from '../utils/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import GoogleButton from 'react-google-button'
import bg from '../img/login.webp'
import LoginThree from '../components/LoginThree'


const Login = ({setIsAuth}) => {
  const navigate = useNavigate()
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        localStorage.setItem('isAuth', true)
        setIsAuth(true)
        navigate('/')
      })
  }
  return (
    <div className='login'>
      <div className="canvas">
        <LoginThree />
      </div>
      <div className="content">
        <h1>Sign in with google</h1>
        <GoogleButton 
        onClick={signInWithGoogle} />
      </div>
    </div>
  )
}

export default Login