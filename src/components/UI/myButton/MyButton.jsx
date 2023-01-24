import React from 'react'
import './myButton.scss'


export const MyButton = ({ children, shape, ...props }) => {
  return (
    <button
      className={`my__button ${shape}`} {...props}
    >
      {children}
    </button>
  )
}
