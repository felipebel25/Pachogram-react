import React from 'react'
// hook
import useInputValue from '../../hooks/useInputValue'
// style
import { Form, Input, Img, Text, Button, Spinner } from './styles'

const UserForm = ({ onSubmit, title, text, id, error, disabled }) => {
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
        <Img src='https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/69810320_100605981323755_90273817355616256_n.jpg?_nc_cat=103&_nc_rgb565=1&ccb=1-3&_nc_sid=174925&_nc_ohc=BG5mRdEtu2kAX9mg6na&_nc_ht=scontent-bog1-1.xx&oh=a4da9e60f7e37814952d9a4116c245cb&oe=60ECACEC' alt='smudge lord' />
        <Text>{text}</Text>
        <Input disabled={disabled} type='text' placeholder='Email' {...email} />
        <Input disabled={disabled} type='password' placeholder='Password' {...password} />
        <Button disabled={disabled}>{title}</Button>
        {disabled && <Spinner />}
        {title === 'Iniciar Sesion' && <div>
          <Text>¿No tienes una cuenta?<a href='#si'> Registrate</a></Text>
        </div>}

      </Form>

    </>
  )
}

export default UserForm
