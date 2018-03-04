import { KORD_NETWORK_GRAPHQL_ENDPOINT } from 'core/constants'
import { Fetch } from 'core/services'

export const makeGraphQLFetcher = graphQLParams => {
  return Fetch.post(graphQLParams, KORD_NETWORK_GRAPHQL_ENDPOINT).then(res =>
    res.json()
  )
}
