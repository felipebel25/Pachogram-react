import React from 'react'
import { ListOfCategories } from '../ListOfCategory/index'
import { ListOfPhotoCards } from '../ListOfPhotoCards/index'

const Home = ({ categoryId }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  )
}

export default Home
