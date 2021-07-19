
import { gql, useMutation } from '@apollo/client'

const REGISTER = gql`
    mutation signup($input: UserCredentials!){
        signup(input: $input)
    }
`
export const useRegisterMutation = () => {
  const [registerMutation, { data, loading, error }] = useMutation(REGISTER)
  console.log(registerMutation)
  return { registerMutation, data, error, loading }
}
