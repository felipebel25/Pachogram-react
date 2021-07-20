import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import Layout from '../Layout/index'
const Detail = ({ detailId }) => {
  return (
    <div>

      <Layout title={`Fotografia ${detailId}🙀 `}>

        <PhotoCardWithQuery id={detailId} />
      </Layout>
    </div>
  )
}

export default Detail
