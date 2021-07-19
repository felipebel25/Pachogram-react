import React from 'react'
import { ListOfCategories } from '../ListOfCategory/index'
import { ListOfPhotoCards } from '../ListOfPhotoCards/index'
const HomePage = ({ categoryId }) => {
  return (
    <>

      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
}
)
