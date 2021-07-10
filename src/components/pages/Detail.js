import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'

const Detail = ({ detailId }) => {
  return (
    <div>
      <PhotoCardWithQuery id={detailId} />
    </div>
  )
}

export default Detail
