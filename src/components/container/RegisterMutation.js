
import { useMutation, gql } from '@apollo/client'

const REGISTER = gql`
mutation signup ($input: UserCredentials!) {
    signup (input: $input)
}
`
export const useRegisterMutations = () => {
  const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(REGISTER)
  return { mutation, mutationLoading, mutationError }
}
