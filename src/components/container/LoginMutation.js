
import { gql, useMutation } from '@apollo/client'

const LOGIN = gql`
    mutation login($input: UserCredentials!){
        login(input: $input)
    }
`
export const useLoginMutation = () => {
  const [loginMutation, { data, loading, error }] = useMutation(LOGIN)
  console.log(data)
  return { loginMutation, data, error, loading }
}
