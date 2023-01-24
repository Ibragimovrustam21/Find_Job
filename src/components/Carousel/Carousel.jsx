import React from 'react'
import Slider from "react-slick";
import user1 from '../../assets/user1.png'
import { TestimonialsCard } from '../Testimonials/TestimonialsCard';
import './carousel.scss'


export const Carousel = () => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
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
    }
  ]
  return (
    <div
      className='wrapper'
      style={{ background: '#F9FAFB' }}
    >
      <div className='carousel__testimonials'>
        <h2 className='carousel__title'>
          What They Says About Our Services
        </h2>
        <div className='card__box'>
          <Slider {...settings}>
            {
              cardArray.map(card => (
                <TestimonialsCard card={card} key={card} />
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}
