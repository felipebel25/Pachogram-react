import React from 'react'
import { ListOfCategories } from './components/ListOfCategory/index'
import { GlobalStyle } from './GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards/index'
import Logo from './components/logos/index.js'
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  )
}

export default App
