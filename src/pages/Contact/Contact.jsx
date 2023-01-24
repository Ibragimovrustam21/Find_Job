import React from 'react'
import { WelcomerBanner } from '../../components/WelcomerBanner/WelcomerBanner'
import image2 from '../../assets/img2.png'
import './contact.scss'
import { MyButton } from '../../components/UI/myButton/MyButton'

export const Contact = () => {
  return (
    <>
      <WelcomerBanner
        img={image2}
        title={'Contact Us'}
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget odio cras at aliquam id. Et maecenas.'}
      />
      <div className='wrapper about__inputField'>
        <h2 className='about__title text-center'>Leave Your Message Here</h2>

        <div className='d-flex'>
          <div className='input__box'>
            <label>Your Name*</label>
            <input type={'text'} className='input' placeholder='Type Name...' />
          </div>
          <div className='input__box'>
            <label>Your Email*</label>
            <input type={'text'} className='input' placeholder='Type Email...' />
          </div>
        </div>
        <div className='input__box'>
          <label>Subject</label>
          <input type={'text'} className='input' placeholder='Type Subject...' />
        </div>
        <div className='input__box'>
          <label>Your Message*</label>
          <textarea className='input input__textarea' placeholder='Type Your Messages...'></textarea>
        </div>
        <div className='text-center'>
          <MyButton type='square p-3 px-5 submit__btn'>Submit</MyButton>
        </div>
      </div>
      <div className='wrapper about__socialField'>
        <div className='d-flex align-items-center social__block'>
          <a href='#' className='social__box'>
            <svg viewBox="0 0 18 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3291 5.81146H17.5243V0.246458C16.973 0.170625 15.0772 0 12.8693 0C8.26241 0 5.10658 2.89771 5.10658 8.22354V13.125H0.0228271V19.3463H5.10658V35H11.3395V19.3477H16.2176L16.992 13.1265H11.338V8.84042C11.3395 7.04229 11.8237 5.81146 14.3291 5.81146Z" fill="#20BFA9" />
            </svg>
          </a>
          <p className='social__name'> Facebook</p>
        </div>
        <div className='d-flex align-items-center social__block'>
          <a href='#' className='social__box'>
            <svg viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35 3.64781C33.6984 4.21875 32.3116 4.59719 30.8656 4.78094C32.3531 3.89281 33.4884 2.49719 34.0222 0.815C32.6353 1.64187 31.1041 2.22594 29.4722 2.55188C28.1553 1.14969 26.2784 0.28125 24.2309 0.28125C20.2584 0.28125 17.0603 3.50563 17.0603 7.45844C17.0603 8.02719 17.1084 8.57406 17.2266 9.09469C11.2612 8.80375 5.98281 5.94469 2.43687 1.58938C1.81781 2.66344 1.45469 3.89281 1.45469 5.21625C1.45469 7.70125 2.73438 9.90406 4.64187 11.1794C3.48906 11.1575 2.35812 10.8228 1.4 10.2956C1.4 10.3175 1.4 10.3459 1.4 10.3744C1.4 13.8612 3.88719 16.7575 7.14875 17.4247C6.56469 17.5844 5.92812 17.6609 5.2675 17.6609C4.80813 17.6609 4.34437 17.6347 3.90906 17.5384C4.83875 20.38 7.47688 22.4691 10.6138 22.5369C8.1725 24.4466 5.07281 25.5972 1.71719 25.5972C1.12875 25.5972 0.564375 25.5709 0 25.4987C3.17844 27.5484 6.94531 28.7188 11.0075 28.7188C24.2113 28.7188 31.43 17.7812 31.43 8.30062C31.43 7.98344 31.4191 7.67719 31.4037 7.37313C32.8278 6.3625 34.0244 5.10031 35 3.64781Z" fill="#20BFA9" />
            </svg>
          </a>
          <p className='social__name'> Twitter</p>
        </div>
        <div className='d-flex align-items-center social__block'>
          <a href='#' className='social__box'>
            <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.3409 0H9.65847C4.33279 0 0 4.333 0 9.65868V25.3411C0 30.667 4.33279 34.9998 9.65847 34.9998H25.3409C30.667 34.9998 34.9998 30.6668 34.9998 25.3411V9.65868C35 4.333 30.667 0 25.3409 0ZM31.8946 25.3411C31.8946 28.9547 28.9547 31.8944 25.3411 31.8944H9.65847C6.04508 31.8946 3.10535 28.9547 3.10535 25.3411V9.65868C3.10535 6.04529 6.04508 3.10535 9.65847 3.10535H25.3409C28.9545 3.10535 31.8944 6.04529 31.8944 9.65868V25.3411H31.8946Z" fill="#20BFA9" />
              <path d="M17.5001 8.48181C12.5272 8.48181 8.48157 12.5275 8.48157 17.5004C8.48157 22.4731 12.5272 26.5185 17.5001 26.5185C22.473 26.5185 26.5187 22.4731 26.5187 17.5004C26.5187 12.5275 22.473 8.48181 17.5001 8.48181ZM17.5001 23.413C14.2397 23.413 11.5869 20.7606 11.5869 17.5002C11.5869 14.2395 14.2395 11.587 17.5001 11.587C20.7607 11.587 23.4133 14.2395 23.4133 17.5002C23.4133 20.7606 20.7605 23.413 17.5001 23.413Z" fill="#20BFA9" />
              <path d="M26.8969 5.84863C26.2986 5.84863 25.7108 6.09085 25.2883 6.51525C24.8637 6.93758 24.6196 7.52552 24.6196 8.12589C24.6196 8.72439 24.8639 9.31213 25.2883 9.73653C25.7106 10.1589 26.2986 10.4031 26.8969 10.4031C27.4972 10.4031 28.0831 10.1589 28.5075 9.73653C28.9319 9.31213 29.1741 8.72419 29.1741 8.12589C29.1741 7.52552 28.9319 6.93758 28.5075 6.51525C28.0852 6.09085 27.4972 5.84863 26.8969 5.84863Z" fill="#20BFA9" />
            </svg>
          </a>
          <p className='social__name'> Instagram</p>
        </div>
      </div>
    </>
  )
}
