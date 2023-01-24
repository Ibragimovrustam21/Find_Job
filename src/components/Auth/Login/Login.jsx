import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../../assets/login.png'
import { MyButton } from '../../UI/myButton/MyButton'
import { MyInput } from '../../UI/myInput/MyInput'


import '../auth.scss'
import './login.scss'

export const Login = () => {
  return (
    <div className='row auth login'>
      <div className='col-7 p-0'>
        <img className='auth__image' src={image} alt='' />
      </div>
      <div className='col-5 p-0' style={{ background: '#F9FAFB' }}>
        <div className='auth__wrapper'>
          <h2 className='auth__title'>Sign in</h2>
          <p className='auth__text'>Enter your account details below</p>
          <form>
            <MyInput
              type='email'
              title={'Email'}
              placeholder='ex: john@email.com'
            />
            <MyInput
              type='password'
              title={'Password'}
              placeholder='i.e. IAmthepreciouspass123 '
            />
            <div className='d-flex align-items-center my-2'>
              <input type='checkbox' className='me-2' />
              <p className='checkbox__title'>Keep me signed in</p>
            </div>
            <MyButton style={{ background: '#20BFA9' }} shape='round' >Submit</MyButton>
          </form>
          <div className='d-flex align-items-center mt-4'>
            <p className='forget__password--title'>Forget password?</p>
            <Link to='/reset-password' className='reset__title ms-2'>Reset now</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
