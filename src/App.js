/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { Router } from '@reach/router'
import Context from './Context'
// componentes
import Home from './components/pages/Home'
import Detail from './components/pages/Detail'
import Navbar from './Navbar'
import Favs from './components/pages/Favs'
import NotRegister from './components/pages/NotRegister'
import User from './components/pages/User'
// styles
import Logo from './components/logos/index.js'
import { GlobalStyle } from './styles/GlobalStyles'
// const UserLogged = ({ children }) => {
//   return children({ isAuth: false })
// }
const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />

      </Router>
      <Context.Consumer>
        {({ isAuth }) =>
          isAuth
            ? <Router>
              <Favs path='/favs' />
              <User path='/user' />
            </Router>
            : <Router>
              <NotRegister path='/favs' />
              <NotRegister path='/user' />
              <NotRegister path='/user' />

            </Router>}
      </Context.Consumer>
      <Navbar />
    </div>
  )
}
export default App
