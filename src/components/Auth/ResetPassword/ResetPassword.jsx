import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../../assets/ResetPassword.png'
import { MyButton } from '../../UI/myButton/MyButton'
import { MyInput } from '../../UI/myInput/MyInput'


import '../auth.scss'
import './resetPassword.scss'

export const ResetPassword = () => {
  return (
    <div className='row auth reset__password'>
      <div className='col-7 p-0'>
        <img className='auth__image' src={image} alt='' />
      </div>
      <div className='col-5 p-0' style={{ background: '#F9FAFB' }}>
        <div className='auth__wrapper'>
          <h2 className='auth__title'>Reset <br /> Password</h2>
          <p className='auth__text'>Enter your account details below</p>
          <form>
            <MyInput
              type='email'
              title={'Email Adress'}
              placeholder='ex: john@email.com'
            />
            <MyButton style={{ background: '#20BFA9' }} shape='round mt-2' >Send reset link</MyButton>
          </form>
          <div className='d-flex align-items-center mt-4'>
            <p className='forget__password--title'>Remember password?</p>
            <Link to='/sign-in' className='reset__title ms-2'>Sign in now</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
