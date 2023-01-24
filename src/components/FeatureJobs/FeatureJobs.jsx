import React from 'react'
import { MyButton } from '../UI/myButton/MyButton'
import { FeatureJobsCard } from './FeatureJobCard/FeatureJobsCard'
import './featureJobs.scss'

export const FeatureJobs = () => {
  const jobs = [
    { jobName: 'Professional Hairdresser', by: 'Professional Hairdresser' },
    { jobName: 'Project Manager', by: 'By Construction LLC.' },
    { jobName: '3D Interior Designer', by: 'Professional Hairdresser' },
    { jobName: 'Professional Hairdresser', by: 'Professional Hairdresser' },
    { jobName: 'Project Manager', by: 'By Construction LLC.' },
    { jobName: '3D Interior Designer', by: 'Professional Hairdresser' },
  ]
  return (
    <div className='wrapper' style={{ background: '#F9FAFB' }}>
      <div className='feature__jobs'>
        <div className='row feature__jobs--header'>
          <div className='col feature__jobs--box'>
            <div>
              <h3>Our Featured Jobs</h3>
              <p>
                Check our featured jobs from popular companies. Start applying now.
              </p>
            </div>
          </div>
          <div className='col feature__jobs--box justify-content-end '>
            <MyButton type='square' style={{ background: '#fae0d8', color: '#FF794D' }} >
              View All Jobs
            </MyButton>
          </div>
        </div>
        <div className='row feature__jobs--content'>
          {
            jobs.map((job, index) => (
              <FeatureJobsCard job={job} key={index} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
