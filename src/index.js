import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import Context from './Context'

import {
  ApolloProvider,
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache
} from '@apollo/client'

import { onError } from '@apollo/client/link/error'

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')

  if (token) {
    operation.setContext({
      headers: {
        authorization: 'Bearer ' + window.sessionStorage.getItem('token')
      }
    })
  }
  return forward(operation)
})
const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    window.sessionStorage.removeItem('token')
    window.Location = '/user'
  }
})

const client = new ApolloClient({
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: 'https://miaugram-93qmjxkt4-felipebel25.vercel.app/graphql'
    })
  ]),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>

  , document.getElementById('App'))
