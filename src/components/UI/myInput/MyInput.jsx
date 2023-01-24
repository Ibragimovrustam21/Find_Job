import React from 'react'
import './input.scss'

export const MyInput = ({ title, type, placeholder, ...props }) => {
  return (
    <div className='input__box' {...props}>
      <label>{title}</label>
      <input
        type={type}
        className='input'
        placeholder={placeholder}
      />
    </div>
  )
}