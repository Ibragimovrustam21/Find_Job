import React from 'react'
import { Link } from 'react-router-dom'

import './jobsList.scss'

export const JobListItem = () => {
  return (
    <Link to='/job-description' className='jobList__item'>
      <div className='jobList__item--head d-flex justify-content-between'>
        <div>
          <h4 className='jobs__name'>Wee Need Professional Hairdresser For Our Beauty Salon With </h4>
          <h4 className='jobs__name'>Two Years of Experience At Least.</h4>
        </div>
        <div>
          <p className='post__time'>2 hours ago</p>
        </div>
      </div>
      <div className='jobList__item--tags d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center'>
          <div className='d-flex align-items-center'>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0C3.865 0 0.5 3.38833 0.5 7.55417C0.5 13.4733 7.295 19.585 7.58417 19.8417C7.70333 19.9475 7.85167 20 8 20C8.14833 20 8.29667 19.9475 8.41583 19.8425C8.705 19.585 15.5 13.4733 15.5 7.55417C15.5 3.38833 12.135 0 8 0ZM8 11.6667C5.7025 11.6667 3.83333 9.7975 3.83333 7.5C3.83333 5.2025 5.7025 3.33333 8 3.33333C10.2975 3.33333 12.1667 5.2025 12.1667 7.5C12.1667 9.7975 10.2975 11.6667 8 11.6667Z" fill="#1D263A" />
            </svg>
            <p className='location ms-1'>Dubai, UAE</p>
          </div>
          <div className='job__tag'>
            Beauty Salon
          </div>
          <div className='job__tag'>
            Part - Time
          </div>
        </div>
        <div className='d-flex align-items-center'>
          <p className='estimated__salary'>Estimated Salary:</p>
          <h4 className='estimated__salary--cost'>$400 - $800</h4>
        </div>
      </div>
    </Link>
  )
}
