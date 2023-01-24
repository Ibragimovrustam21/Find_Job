import React from 'react'
import { WelcomerBanner } from '../../components/WelcomerBanner/WelcomerBanner'
import image from '../../assets/jobs.png'
import map from '../../assets/map.png'

import './jobDescription.scss'
import { MyButton } from '../../components/UI/myButton/MyButton'

export const JobDescription = () => {
  return (
    <>
      <WelcomerBanner
        img={image}
        title={'Job Description'}
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget odio cras at aliquam id. Et maecenas.'}
      />
      <div className='wrapper'>
        <div className='row job__desc--block'>
          <div className='col-8 job__desc--info--block'>
            <MyButton type='round' style={{ background: '#20BFA9' }}>
              Restaurants
            </MyButton>
            <h2 className='job__desc--main--title my-3'>We Need A Waitress For Our Well Known Restaurant In Dubai</h2>
            <p className='job__desc--text my-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida malesuada amet quis magna. Tincidunt egestas pharetra facilisis tellus duis turpis et egestas. Morbi neque odio facilisis ultricies. Fermentum, neque nunc viverra at elit condimentum consectetur ultricies aliquet. Quis augue viverra lorem mus sit nam. Volutpat massa pretium tortor, nunc, vitae eu.
            </p>
            <h5 className='job__desc--title mb-2'>Job Responsibilities.</h5>
            <ul className='job__desc--menu'>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
            <h5 className='job__desc--title my-3'>Required Skills</h5>
            <ul className='job__desc--menu'>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
            <h5 className='job__desc--title my-3'>About Company</h5>
            <p className='job__desc--text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida malesuada amet quis magna. Tincidunt egestas pharetra facilisis tellus duis turpis et egestas. Morbi neque odio facilisis ultricies. Fermentum, neque nunc viverra at elit condimentum consectetur ultricies aliquet. Quis augue viverra lorem mus sit nam. Volutpat massa pretium tortor, nunc, vitae eu.
            </p>
          </div>
          <div className='col-4 job__desc--contact--block'>
            <div className='job__desc--contact--box'>
              <h4 className='contact__main--title mb-4'>Company Detail</h4>
              <div className='mb-2'>
                <p className='contact__label'>Company Name</p>
                <h5 className='contact__desc'>SanSation Restaurant</h5>
              </div>
              <div className='mb-2'>
                <p className='contact__label'>Location</p>
                <h5 className='contact__desc'>Motor CityGreen Community - Dubai</h5>
              </div>
              <div className='mb-2'>
                <p className='contact__label'>Email</p>
                <h5 className='contact__desc'>Sanstation@gmail.com</h5>
              </div>
              <div className='mb-2'>
                <p className='contact__label'>Contact Number</p>
                <h5 className='contact__desc'>+97144567371</h5>
              </div>
              <div className='mb-2'>
                <p className='contact__label'>Salary</p>
                <h5 className='contact__desc'>$400 - $800</h5>
              </div>
              <MyButton
                style={{ background: '#20BFA9' }}
                type='square w-100'
              >
                Apply Job
              </MyButton>
            </div>
            <div className='job__desc--map'>
              <img src={map} className='w-100 mt-4' alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
