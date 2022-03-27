import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import CreatePost from './pages/CreatePost'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react';
import {signOut} from 'firebase/auth' 
import {auth} from './firebase-config'
import EditPost from './pages/EditPost';
 
function App() {


  const [isAuth , setIsAuth]  = useState(localStorage.getItem("isAuth"))
  const signout = () => {
    signOut(auth).then(()=> {
      localStorage.setItem('isAuth', false)
      setIsAuth(false)
      window.location.pathname = '/login';
    })
  }

  return (
    <Router>
      <nav>
        <Link to='/' >Home</Link>
        {
        !isAuth ? <Link to='/login' >Login</Link> : 
        <>
        <Link to='/createpost' >CreatePost</Link>
        <button onClick={signout}>Logout</button>
        </>
        }
      </nav>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth}/>} />
        <Route path='/createpost' element={<CreatePost isAuth={isAuth}/>} />
        <Route path='/editpost/:id' element= {<EditPost isAuth={isAuth}/>}/>
        <Route path='/login' element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;
