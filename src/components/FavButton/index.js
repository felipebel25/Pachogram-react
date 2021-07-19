import React from 'react'
import PropTypes from 'prop-types'

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
FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
export default FavButton
