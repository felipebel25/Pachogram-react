import React from 'react'

import ReactDOM from 'react-dom'
import Context from './Context'
import App from './App'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://miaugram-6jbh1mfss-felipebel25.vercel.app/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <Context.Provider value={{ isAuth: false }}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>

  , document.getElementById('App'))
