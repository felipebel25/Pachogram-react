import React from 'react'
import Context from '../../Context'
import UserForm from '../UserForm'

const NotRegister = () => {
  return (
    <Context.Consumer>
      {
       ({ isAuth, activateAuth }) => {
         return (
           <>
             <UserForm onSubmit={activateAuth} title='Iniciar Sesion' text='Inicia sesion con tu cuenta de Pachogram y descubre el increible mundo de los pachos' />
             <UserForm
               onSubmit={activateAuth} title='Registrarse' text='Registrate con tu cuenta de Pachogram y descubre el increible mundo de los pachos'
               id='si'
             />

           </>
         )
       }
     }
    </Context.Consumer>
  )
}

export default NotRegister

// export const NotRegisteredUser = () => {
//   const { registerMutation } = useRegisterMutation()

//   return (
//       <Context.Consumer>
//           {
//               ({activateAuth}) => {
//                   const onSubmit = ({email, password}) => {
//                       const input = { email, password }
//                       const variables = { input }
//                       registerMutation({ variables })
//                       .then(activateAuth)
//                   }
//                   return <>
//                       <UserForm onSubmit={onSubmit} title='Registrarse'/>
//                       <UserForm onSubmit={activateAuth} title='Iniciar Sesion'/>
//                   </>
//               }
//           }
//       </Context.Consumer>
//       // <h1>NotRegisteredUser</h1>
//   )
// }
