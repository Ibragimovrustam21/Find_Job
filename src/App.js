import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { publicRoutes, privateRoutes } from './routes'

import './App.scss'


export const App = () => {
  let isAuth = false
  // const [isAuth, setIsAuth] = useState(true)

  return (
    <div className="app__container">
      <Navbar />
      <Routes>
        {
          isAuth
            ? privateRoutes.map((route, index) => {
              return (
                <React.Fragment key={route.name}>
                  <Route
                    key={index}
                    path={route.path}
                    element={<route.component />}
                  />
                  <Route path="*" element={<Navigate to='/' />} />
                </React.Fragment>
              )
            })

            : publicRoutes.map((route, index) => {
              return (
                <React.Fragment key={route.name}>
                  <Route
                    key={index}
                    path={route.path}
                    element={<route.component />}
                  />
                  <Route path="*" element={<Navigate to='/sign-in' />} />

                </React.Fragment>
              )
            })
        }
      </Routes>
      {isAuth && <Footer />}
    </div>
  );
}

