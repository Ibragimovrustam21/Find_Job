import React from 'react'
import { WelcomerBanner } from '../../components/WelcomerBanner/WelcomerBanner'
import { MyButton } from '../../components/UI/myButton/MyButton'
import image from '../../assets/img3.png'

import './jobs.scss'
import { MyCustomRadio } from '../../components/UI/myCustomRadio/MyCustomRadio'
import { Link } from 'react-router-dom'
import { JobListItem } from './JobsList/JobListItem'


export const Jobs = () => {
  const arrayJob = [
    {
      id: 1,
      value: 'All'
    },
    {
      id: 2,
      value: 'Internship'
    },
    {
      id: 3,
      value: 'Part-time'
    },
    {
      id: 4,
      value: 'Urgent'
    }
  ]
  const arrayPostDate = [
    {
      id: 1,
      value: 'All'
    },
    {
      id: 2,
      value: 'Last Hour'
    },
    {
      id: 3,
      value: 'Last 24 Hours'
    },
    {
      id: 4,
      value: 'Last Week'
    },
    {
      id: 5,
      value: 'Last Month'
    }
  ]
  const arrayExperience = [
    {
      id: 1,
      value: 'All'
    },
    {
      id: 2,
      value: 'No Experience'
    },
    {
      id: 3,
      value: '1 Year Experience'
    },
    {
      id: 4,
      value: '2 Years Experience'
    },
    {
      id: 5,
      value: '3 Years Experience'
    },
    {
      id: 6,
      value: 'More'
    },

  ]


  return (
    <>
      <WelcomerBanner
        img={image}
        title={'Our Jobs'}
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget odio cras at aliquam id. Et maecenas.'}
      />
      <div className='wrapper'>
        <div className='row search__job--block'>
          <div className='col-5'>
            <input
              type='text'
              className='job__search--input'
              placeholder='Job Tittle, Keyword, Company'
            />
          </div>
          <div className='col-3'>
            <input
              type='text'
              className='job__search--input'
              placeholder='Location'
            />
          </div>
          <div className='col-2'>
            <input
              type='text'
              className='job__search--input'
              placeholder='Salary'
            />
          </div>
          <div className='col-2'>
            <MyButton type='square' style={{ background: '#1D263A' }}>
              <svg className='me-2' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.207716 15.7917L5.04204 10.9574C4.10563 9.80068 3.54181 8.33089 3.54181 6.73009C3.54181 3.01987 6.56071 0.000976562 10.2709 0.000976562C13.9811 0.000976562 17 3.01984 17 6.73005C17 10.4403 13.9811 13.4592 10.2709 13.4592C8.67008 13.4592 7.20029 12.8953 6.04361 11.9589L1.20928 16.7933C1.07115 16.9314 0.889835 17.0008 0.708481 17.0008C0.527128 17.0008 0.345808 16.9314 0.207684 16.7933C-0.0692616 16.5163 -0.0692616 16.0686 0.207716 15.7917ZM10.2709 12.0425C13.2005 12.0425 15.5833 9.6597 15.5833 6.73005C15.5833 3.80041 13.2005 1.41761 10.2709 1.41761C7.34124 1.41761 4.95844 3.80041 4.95844 6.73005C4.95844 9.6597 7.34127 12.0425 10.2709 12.0425Z" fill="white" />
              </svg>
              Search
            </MyButton>
          </div>
        </div>
      </div>
      <div className='wrapper'>
        <div className='row jobs__filter--block py-3'>
          <div className='col-3 p-3'>
            <div className='jobs__categories p-4'>
              <h4 className='jobs__categories--title  mx-2'>Categories</h4>
              <ul className='jobs__categories--list px-0'>
                <li className='active'>All</li>
                <li>Hotel</li>
                <li>Restaurants</li>
                <li>Beauty Salons</li>
                <li>Trade Centers</li>
                <li>Real Estate</li>
                <li>Sports Coaches</li>
                <li>Babysitting</li>
                <li>Cleaning</li>
                <li>Other</li>
              </ul>
              <hr />
              <h4 className='jobs__categories--title'>Job Types</h4>
              <MyCustomRadio array={arrayJob} name='job' />
              <hr />
              <h4 className='jobs__categories--title'>Posted Date</h4>
              <MyCustomRadio array={arrayPostDate} name='postDate' />
              <hr />
              <h4 className='jobs__categories--title'>Experience Level</h4>
              <MyCustomRadio array={arrayExperience} name='exp' />
            </div>
          </div>
          <div className='col-9 p-3'>
            <div className='jobs__list'>
              <div className='d-flex align-items-center justify-content-between'>
                <p className='show__result'>Showing 10 - 15 results</p>
                <Link to='/' className='post__job'>Post Your Job Here</Link>
              </div>
              <JobListItem />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
