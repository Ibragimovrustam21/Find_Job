import React from 'react'

import './myCustomRadio.scss'

export const MyCustomRadio = ({ array, name }) => {
  return (
    <>
      {
        array.map(item => (
          <label className="container__radio" key={item.value}>
            {item.value}
            <input type="radio" defaultChecked={item.id == 1 && true} name={name} />
            <span className="checkmark"></span>
          </label>
        ))
      }
    </>
  )
}
