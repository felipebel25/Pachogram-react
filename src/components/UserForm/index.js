import React from 'react'
// hook
import useInputValue from '../../hooks/useInputValue'
// style
import { Form, Input, Img, Text, Button, Spinner, Anchor } from './styles'

const UserForm = ({ onSubmit, title, text, id, error, disabled }) => {
  const GATO_IMAGE = 'https://pbs.twimg.com/profile_images/1159519350925201408/lgjd_Phv_400x400.jpg'
  const email = useInputValue('')
  const password = useInputValue('')
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      {error && <h1>{error}</h1>}
      <Form disabled={disabled} onSubmit={handleSubmit} id={id}>
        <Img src={GATO_IMAGE} alt='smudge lorddddddddd' />
        <Text>{text}</Text>
        <Input disabled={disabled} type='text' placeholder='Email' {...email} />
        <Input disabled={disabled} type='password' placeholder='Password' {...password} />
        <Button disabled={disabled}>{title}</Button>
        {disabled && <Spinner />}
        {title === 'Iniciar Sesion' && <div>
          <Text>¿No tienes una cuenta?<Anchor href='#si'> Registrate</Anchor></Text>
        </div>}

      </Form>

    </>
  )
}

export default UserForm
