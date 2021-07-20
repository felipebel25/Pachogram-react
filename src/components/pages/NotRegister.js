import React from 'react'
import Context from '../../Context'
import UserForm from '../UserForm'
// hooks mutation
import { useLoginMutation } from '../container/LoginMutation'

const Login = ({ activateAuth }) => {
  const { loginMutation, loading: loadingLogin, error: errorLogin } = useLoginMutation()
  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    loginMutation({ variables }).then(({ data }) => {
      const { login } = data
      activateAuth(login)
    })
  }
  const errorLoginMsg = errorLogin && 'El usuario no existe o la contraseña no coincide'
  return (
    <UserForm disabled={loadingLogin} error={errorLoginMsg} onSubmit={onSubmitLogin} title='Iniciar Sesion' text='Inicia sesion con tu cuenta de Pachogram y descubre el increible mundo de los pachos' />
  )
}
const NotRegister = () => {
  return (
    <Context.Consumer>
      {
       ({ isAuth, activateAuth }) => {
         return (
           <>
             <Login activateAuth={activateAuth} />

           </>
         )
       }
     }
    </Context.Consumer>
  )
}
export default NotRegister
