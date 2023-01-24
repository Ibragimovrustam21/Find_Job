import React from 'react'
import { useLocation } from 'react-router-dom'
import backgound from '../../assets/Pattern.png'
import { MyButton } from '../UI/myButton/MyButton'

import './welcomerBanner.scss'

export const WelcomerBanner = ({ img, title, text }) => {
  const location = useLocation()

  return (
    <div className='row welcomer wrapper'>
      <div className='col welcomer__info'>
        <div className='position-relative'>
          <h1 className='welcomer__title'>{title}</h1>
          <p className='welcomer__text'>{text}</p>
          {
            location.pathname === '/' && <div className='row welcomer__banner'>
              <div className='col-4'>
                <h4>Location</h4>
                <p>
                  Enter preferred location
                </p>
              </div>
              <div className='col-5'>
                <h4>Type</h4>
                <p>
                  What kind of role do you want?
                </p>
              </div>
              <div className='col-3 d-flex align-items-center'>
                <MyButton type='square' style={{ background: '#0A043C', color: '#fff', padding: '15px' }}>Explore now</MyButton>
              </div>
            </div>
          }
        </div>
      </div>
      <div className='col welcomer__img--block'>
        <img src={backgound} className='background__image' alt='' />
        <img src={img} alt='' />
      </div>
    </div>
  )
}
