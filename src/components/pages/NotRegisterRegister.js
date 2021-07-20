import React from 'react'
import Context from '../../Context'
import UserForm from '../UserForm'
// hooks mutation
import { useRegisterMutation } from '../container/RegisterMutation'

const Registro = ({ activateAuth }) => {
  const { registerMutation, loading: loadingRegister, error: errorRegister } = useRegisterMutation()

  const onSubmitRegister = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    registerMutation({ variables }).then(({ data }) => {
      const { signup } = data
      activateAuth(signup)
    })
  }

  const errorMsg = errorRegister && 'El usuario ya existe o hay algún problema.'

  return (
    <UserForm
      disabled={loadingRegister} error={errorMsg} onSubmit={onSubmitRegister} title='Registrarse' text='Registrate con tu cuenta de Pachogram y descubre el increible mundo de los pachos'
      id='si'
    />
  )
}

const NotRegister = () => {
  return (
    <Context.Consumer>
      {
       ({ isAuth, activateAuth }) => {
         return (
           <>
             <Registro activateAuth={activateAuth} />

           </>
         )
       }
     }
    </Context.Consumer>
  )
}
export default NotRegister
