import React, { useState, useEffect } from 'react'

import useGetFavorites from '../container/GetFavs'
import ListOfFavs from '../ListOfFavs/index'
import Layout from '../Layout/index'

const Favs = () => {
  const { data, error, loading } = useGetFavorites()
  const [favs, setFavs] = useState([])

  useEffect(() => {
    if (data) setFavs(data.favs)
  }, [data])

  return (
    <div>
      <Layout title='Favoritos :D' subtitle='Aqui podes Encontrar tus woows o miaus favoritos :D '>
        {!data && <h1>hola</h1>}
        {loading && <h1>cargando</h1>}
        {error && <h1>{error}</h1>}
        <ListOfFavs favs={favs} />
      </Layout>

    </div>
  )
}

export default Favs
