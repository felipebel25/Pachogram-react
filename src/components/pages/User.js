import React, { useContext } from 'react'
import { Context } from '../../Context'
import { Button } from '../../styles/Button'
const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <div>
      <h1>USer</h1>
      <Button onClick={removeAuth}>
        cerrar Sesion
      </Button>
    </div>
  )
}

export default User
