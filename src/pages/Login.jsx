import {useState, useEffect} from 'react'
import { Link, useLocation as location } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/login.scss'
import logo from '../assets/logo1.png'

import FormContainer from '../components/login/FormContainer'

const Login = () => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const submitHandler = (e) => {
    e.preventDefault()

    // DispatchLogin

  }

  return (
    <div className='login'>
      <FormContainer>

        <div className='formContainer-section1'>
        <img src={logo} alt="logo" />
        <h1>Login</h1>
        </div>
      

        <form className='formContainer-sectionForm' onSubmit={submitHandler}>

          <label htmlFor="">Email adress:</label>
          <input type="email" placeholder='Enter email' value={email}
          onChange={e => setEmail(e.target.value)} />

          <label htmlFor="">Password:</label>
          <input type="password" placeholder='Enter password' value={password}
          onChange={e => setPassword(e.target.value)} />

          <button type='submit'>Login</button>
        </form>

        <div>
          New costumer? 
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
        </div>

      </FormContainer>
    </div>
  )
}

export default Login