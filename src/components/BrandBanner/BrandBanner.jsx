import React from 'react'
import brand1 from '../../assets/brand-logo-l5-1 1.png'
import brand2 from '../../assets/brand-logo-l5-2 1.png'
import brand3 from '../../assets/brand-logo-l5-3 1.png'
import brand4 from '../../assets/brand-logo-l5-4 1.png'
import brand5 from '../../assets/brand-logo-l5-5 1.png'

import './brandBanner.scss'

const sponser = [brand1, brand2, brand3, brand4, brand5]

export const BrandBanner = () => {
  return (
    <div className='row brand__banner wrapper' style={{ borderBottom: '1px solid rgba(29, 38, 58, 0.12)' }}>
      {
        sponser.map(item => (
          <div className='col brand__banner--box' key={item}>
            <img src={item} alt='' />
          </div>
        ))
      }
    </div>
  )
}
