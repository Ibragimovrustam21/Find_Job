import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

const menu = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About Us',
    path: '/about'
  },
  {
    name: 'Our Jobs',
    path: '/jobs'
  },
  {
    name: 'Testimonials',
    path: '/testimonials'
  },
  {
    name: 'Contact Us',
    path: '/contact'
  }
]

export const Navbar = () => {
  let isAuth = false
  // const [isAuth, setIsAuth] = useState(false)

  return (
    <div className='wrapper' id={isAuth ? 'navbar__wrapper' : ''}>
      <div className='navbar'>
        <div className='logo__block'>
          <Link to='/' className='logo'>logo</Link>
        </div>
        <div className='menu__block'>
          <ul className='menu'>
            {
              menu.map(item => (
                <li className='menu__link' key={item.name}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='switch__block'>
          <Link to='/sign-in' className='sign-in'>Sign in</Link>
          <Link to='/sign-up' className='sign-up'>Register</Link>
        </div>
      </div>
    </div>
  )
}
