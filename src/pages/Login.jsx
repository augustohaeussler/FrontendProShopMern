import {useState, useEffect} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/login.scss'
import logo from '../assets/logo1.png'

import FormContainer from '../components/login/FormContainer'

import { loginFail, loginFunction } from '../Redux/userSlice'

const Login = () => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const inputEmailChanche = (e) => {
    setEmail(e.target.value)
    dispatch(loginFail(null))
    
    
  }

  const inputPasswordChanche = (e) => {
    setPassword(e.target.value)
    dispatch(loginFail(null))
    
  }


  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo, loading, error} = userLogin


  const redirect = useLocation.search ? useLocation.search.split('=')[1] : '/'


  const navigate = useNavigate()

  useEffect(()=> {
      if (userInfo) {
        navigate(redirect)
      }

  }, [userInfo, navigate, redirect, error])


  const submitHandler = (e) => {

    e.preventDefault()
    dispatch(loginFunction({
      email,
      password
    }))

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
          <input className={error ? "formContainer-sectionForm-inputError" : 'formContainer-sectionForm-inputActive'} type="email" placeholder='Enter email' value={email}
          onChange={inputEmailChanche} />

          <label htmlFor="">Password:</label>
          <input className={error ? "formContainer-sectionForm-inputError" : 'formContainer-sectionForm-inputActive'} type="password" placeholder='Enter password' value={password}
          onChange={inputPasswordChanche} />

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