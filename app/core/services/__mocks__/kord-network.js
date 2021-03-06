import { GraphQLClient } from 'graphql-request'

const KordNetwork = new GraphQLClient('http://localhost:5000/api/graphql', {
  credentials: null,
  mode: 'cors',
})

export const makeRawRequest = (query, variables) =>
  KordNetwork.rawRequest(query, variables)

export const makeRequest = (query, variables) =>
  KordNetwork.request(query, variables)
