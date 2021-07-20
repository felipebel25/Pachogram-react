import React from 'react'

import { Button } from './styles'

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const FavButton = ({ liked, likes, onClick }) => {
  return (
    <Button type='button' onClick={onClick}>
      {
            liked ? <MdFavorite size='52px' /> : <MdFavoriteBorder size='52px' />
          }
      {likes} likes
    </Button>
  )
}

export default FavButton
