import React from 'react'
import './workingProcess.scss'


export const WorkingProcess = () => {
  return (
    <div className='wrapper our__working__process' style={{ background: '#F9FAFB' }}>
      <h3 className='our__working__process--title text-center'>Our Working Process</h3>
      <div className='row process__step--block'>
        <div className='dashed'></div>
        <div className='col-3 '>
          <div className='process__step--indicators'>
            <span className='text-white'>1</span>
          </div>
          <div className='process__step--info'>
            <h3 className='process__step--title'>Register</h3>
            <p className='process__step--text'>
              Enterprise definition is - a project or undertaking that
            </p>
          </div>
        </div>
        <div className='col-3'>
          <div className='process__step--indicators'>
            <span className='text-white'>2</span>
          </div>
          <div className='process__step--info'>
            <h3 className='process__step--title'>Submit Resume</h3>
            <p className='process__step--text'>
              Enterprise definition is - a project or undertaking that
            </p>
          </div>
        </div>
        <div className='col-3'>
          <div className='process__step--indicators'>
            <span className='text-white'>3</span>
          </div>
          <div className='process__step--info'>
            <h3 className='process__step--title'>Search For  a Job</h3>
            <p className='process__step--text'>
              Enterprise definition is - a project or undertaking that
            </p>
          </div>
        </div>
        <div className='col-3'>
          <div className='process__step--indicators'>
            <span className='text-white'>4</span>
          </div>
          <div className='process__step--info'>
            <h3 className='process__step--title'>Apply</h3>
            <p className='process__step--text'>
              Enterprise definition is - a project or undertaking that
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
