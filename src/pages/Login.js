import React from 'react'
import {auth , provider} from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

function Login({ setIsAuth, isAuth }) {

  let navigate = useNavigate()
const signinwithgoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    localStorage.setItem('isAuth' , true);
    setIsAuth(true);
    // console.log(isAuth)
    navigate('/');
  })
}

  return (
    <div className='loginPage'>
      <p>Sign in with Google to Continue</p>
      <button className='login-with-google-btn' onClick={signinwithgoogle}>
        Sign in with Google</button>      
    </div>
  )
}

export default Login