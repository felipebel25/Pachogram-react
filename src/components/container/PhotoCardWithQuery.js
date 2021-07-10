
import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { gql, useQuery } from '@apollo/client'

function getSinglePhoto (id) {
  const getSinglePhoto = gql`
    query getSinglePhoto($id: ID!){
        photo(id:$id){
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
    `
  return useQuery(getSinglePhoto, { variables: { id } })
}

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data = { photo: {} } } = getSinglePhoto(id)
  const { photo = {} } = data
  return (
    <>
      {error && 'Hay un error perdon'}
      {loading && 'cargando...'}
      <PhotoCard {...photo} />
    </>

  )
}
