import React from 'react'
import { MyButton } from '../../UI/myButton/MyButton'

export const FeatureJobsCard = ({ job }) => {
  return (
    <div className='col-4 feature__jobs--card--box'>
      <div className='feature__jobs--card'>
        <div className='d-flex align-items-center mb-4'>
          <span>
            <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.83594 16.793C6.13477 17.2578 6.83203 17.2578 7.13086 16.793C11.9785 9.82031 12.875 9.08984 12.875 6.5C12.875 2.98047 10.0195 0.125 6.5 0.125C2.94727 0.125 0.125 2.98047 0.125 6.5C0.125 9.08984 0.988281 9.82031 5.83594 16.793ZM6.5 9.15625C5.00586 9.15625 3.84375 7.99414 3.84375 6.5C3.84375 5.03906 5.00586 3.84375 6.5 3.84375C7.96094 3.84375 9.15625 5.03906 9.15625 6.5C9.15625 7.99414 7.96094 9.15625 6.5 9.15625Z" fill="#7F828A" />
            </svg>
          </span>
          <p className='card__location'> Paris, France</p>
        </div>
        <h3 className='card__title'>Professional Hairdresser</h3>
        <p className='card__text'>By <span> Chorocon Salon.</span></p>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center'>
            <span>
              <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.789062 6.5C0.583984 6.5 0.4375 6.67578 0.4375 6.85156V14.4688C0.4375 15.2598 1.05273 15.875 1.84375 15.875H12.1562C12.918 15.875 13.5625 15.2598 13.5625 14.4688V6.85156C13.5625 6.67578 13.3867 6.5 13.2109 6.5H0.789062ZM13.5625 5.21094V4.15625C13.5625 3.39453 12.918 2.75 12.1562 2.75H10.75V1.22656C10.75 1.05078 10.5742 0.875 10.3984 0.875H9.22656C9.02148 0.875 8.875 1.05078 8.875 1.22656V2.75H5.125V1.22656C5.125 1.05078 4.94922 0.875 4.77344 0.875H3.60156C3.39648 0.875 3.25 1.05078 3.25 1.22656V2.75H1.84375C1.05273 2.75 0.4375 3.39453 0.4375 4.15625V5.21094C0.4375 5.41602 0.583984 5.5625 0.789062 5.5625H13.2109C13.3867 5.5625 13.5625 5.41602 13.5625 5.21094Z" fill="#7F828A" />
              </svg>
            </span>
            <p className='ms-2'>1 Week ago</p>
          </div>
          <MyButton style={{ background: '#20bfa9' }} type='square'>
            Apply Now
          </MyButton>
        </div>
      </div>
    </div>
  )
}
