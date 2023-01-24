import { Contact } from "./pages/Contact/Contact"
import { Testimonials } from "./pages/Testimonials/Testimonials"
import { Home } from "./pages/Home/Home"
import { Register } from "./components/Auth/Register/Register"
import { Login } from "./components/Auth/Login/Login"
import { ResetPassword } from "./components/Auth/ResetPassword/ResetPassword"
import { About } from "./pages/About/About"
import { Jobs } from "./pages/Jobs/Jobs"
import { JobDescription } from "./pages/JobDescription/JobDescription"

export const privateRoutes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'contact',
    path: '/contact',
    component: Contact
  },
  {
    name: 'testimonials',
    path: '/testimonials',
    component: Testimonials
  },
  {
    name: 'About',
    path: '/about',
    component: About
  },
  {
    name: 'Jobs',
    path: '/jobs',
    component: Jobs
  },
  {
    name: 'JobDescription',
    path: '/job-description',
    component: JobDescription
  },
]
export const publicRoutes = [
  {
    name: 'Register',
    path: 'sign-up',
    component: Register
  },
  {
    name: 'Login',
    path: 'sign-in',
    component: Login
  },
  {
    name: 'Reset__password',
    path: 'reset-password',
    component: ResetPassword
  },
]