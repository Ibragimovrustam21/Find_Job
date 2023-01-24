import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../../assets/register.png'
import { MyButton } from '../../UI/myButton/MyButton'
import { MyInput } from '../../UI/myInput/MyInput'


import '../auth.scss'
import './register.scss'

export const Register = () => {
  return (
    <div className='row auth register'>
      <div className='col-7 p-0'>
        <img className='auth__image' src={image} alt='' />
      </div>
      <div className='col-5 p-0' style={{ background: '#F9FAFB' }}>
        <div className='auth__wrapper'>
          <h2 className='auth__title'>Register</h2>
          <p className='auth__text'>No credit card required</p>
          <form>
            <MyInput
              type='text'
              title={'Name*'}
              placeholder='Ex: John Doe'
            />
            <MyInput
              type='email'
              title={'Email*'}
              placeholder='Ex: john@email.com'
            />
            <MyInput
              type='password'
              title={'Password*'}
              placeholder='i.e. IAmthepreciouspass123 '
            />
            <MyInput
              type='password'
              title={'Confirm Password*'}
              placeholder='i.e. IAmthepreciouspass123 '
            />
            <div className='d-flex align-items-center my-2'>
              <input type='checkbox' className='me-2' />
              <p className='checkbox__title'>
                I agree to the
                <a href='#' className='ms-1'>Terms & Conditions</a>
              </p>
            </div>
            <MyButton style={{ background: '#20BFA9' }} shape='round' type='submit' >Submit</MyButton>
          </form>
          <div className='d-flex align-items-center mt-4'>
            <p className='forget__password--title'>
              Already have an account?
            </p>
            <Link to='/sign-in' className='reset__title ms-2'> Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
