import React from 'react'
import './testimonialsCard.scss'

export const TestimonialsCard = ({ card, ...props }) => {
  return (
    <div className='card__item--box' {...props}>
      <div className='card__item'>
        <p className='card__item--title'>
          {card.text}
        </p>
        <div className='card__item--user '>
          <div className='card__item--user--img'>
            <img src={card.img} alt='' />
          </div>
          <div>
            <h4 className='card__item--user--name'>{card.name}</h4>
            <p className='card__item--user--job'>{card.job}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
