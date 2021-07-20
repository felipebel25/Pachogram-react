import React from 'react'

import { Grid, Link, Image } from './style'
const ListOfFavs = ({ favs = [] }) => {
  return (

    <Grid>
      {favs.map(fav => (
        <Link key={fav.id} to={`/detail/${fav.id}`}>
          <Image src={fav.src} />
        </Link>
      ))}
    </Grid>
  )
}

export default ListOfFavs
