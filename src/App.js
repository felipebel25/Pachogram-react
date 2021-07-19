/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext, Suspense } from 'react'
import { Router, Redirect } from '@reach/router'
import { Context } from './Context'
// componentes
import { Home } from './components/pages/Home'
import Detail from './components/pages/Detail'
import Navbar from './Navbar'
import NotRegister from './components/pages/NotRegister'
import User from './components/pages/User'
import NotFound from './components/pages/NotFound'
import { Spinner } from './components/UserForm/styles'
// styles
import Logo from './components/logos/index.js'
import { GlobalStyle } from './styles/GlobalStyles'

const Favs = React.lazy(() => import('./components/pages/Favs'))
// const UserLogged = ({ children }) => {
//   return children({ isAuth: false })
// }
export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={Spinner}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegister path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}

        <Favs path='/favs' />
        <User path='/user' />

      </Router>
      <Navbar />
    </Suspense>
  )
}
