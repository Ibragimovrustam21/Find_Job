import React from 'react'
import { WelcomerBanner } from '../../components/WelcomerBanner/WelcomerBanner'
import { TestimonialsCard } from '../../components/Testimonials/TestimonialsCard'

import user1 from '../../assets/user1.png'
import image3 from '../../assets/img3.png'
import bg_media from '../../assets/bg-header-media.png'

import './testimonials.scss'

export const Testimonials = () => {
  const cardArray = [
    {
      name: 'Wade Warren',
      text: ' “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat.”',
      img: user1,
      job: 'UI Designer, Adobe'
    },
    {
      name: 'Wade Warren',
      text: ' “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat.”',
      img: user1,
      job: 'UI Designer, Adobe'
    },
    {
      name: 'Wade Warren',
      text: ' “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat.”',
      img: user1,
      job: 'UI Designer, Adobe'
    },
    {
      name: 'Wade Warren',
      text: ' “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat.”',
      img: user1,
      job: 'UI Designer, Adobe'
    },
    {
      name: 'Wade Warren',
      text: ' “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat.”',
      img: user1,
      job: 'UI Designer, Adobe'
    },
    {
      name: 'Wade Warren',
      text: ' “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat.”',
      img: user1,
      job: 'UI Designer, Adobe'
    },
    {
      name: 'Wade Warren',
      text: ' “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat.”',
      img: user1,
      job: 'UI Designer, Adobe'
    },
    {
      name: 'Wade Warren',
      text: ' “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat.”',
      img: user1,
      job: 'UI Designer, Adobe'
    },
    {
      name: 'Wade Warren',
      text: ' “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat.”',
      img: user1,
      job: 'UI Designer, Adobe'
    }
  ]
  return (
    <>
      <WelcomerBanner
        img={image3}
        title={'Testimonials'}
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget odio cras at aliquam id. Et maecenas.'}
      />
      <div className=' wrapper testimonials__cards--group'>
        <h2 className='testimonials__title text-center'>People We Helped To Find Their <br />Best Job</h2>
        <div className='testimonials__cards'>
          {
            cardArray.map(card => (
              <TestimonialsCard style={{ width: '30%' }} card={card} />
            ))
          }
        </div>
      </div>
      <div className='row testimonials__media--block'>
        <div className='col-6 ' style={{ background: '#FF794D' }}>
          <div className='h-100 d-flex flex-column justify-content-center'>
            <h3 className='testimonials__media--title text-white'>
              “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat.”
            </h3>
            <br />
            <h5 className='testimonials__media--owner text-white mt-3'>---- Elithabeth Doe</h5>
          </div>
        </div>
        <div className='col-6 p-0'>
          <img className='h-100 w-100 ' src={bg_media} alt='' />
        </div>
      </div>
    </>
  )
}
