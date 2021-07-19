import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { PhotoCard } from '../PhotoCard'

const withPhotos = gql`
    query getPhotos($categoryId: ID){
    photos(categoryId : $categoryId){
        id
        categoryId
        src
        likes
        userId
        liked
        }
    }`

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data = { photos: {} } } = useQuery(withPhotos, { variables: { categoryId: categoryId } })
  const { photos } = data
  console.log(data)
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <ul>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}
