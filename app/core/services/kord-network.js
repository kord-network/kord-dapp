import { GraphQLClient } from 'graphql-request'

import { CREDENTIALS, KORD_NETWORK_GRAPHQL_ENDPOINT } from 'core/constants'

/**
 * Create a GraphQL client for sending requests to the KORD Network API
 *
 * @see https://github.com/graphcool/graphql-request
 *
 * @example KordNetwork.request(query, variables).then(data => console.log(data))
 *
 * @type {GraphQLClient}
 */
const KordNetwork = new GraphQLClient(KORD_NETWORK_GRAPHQL_ENDPOINT, {
  credentials: CREDENTIALS,
  mode: 'cors',
})

/**
 * Utility function that wraps `KordNetwork.request()`
 *
 * @param  {String} query     GraphQL query string
 * @param  {Object} variables GraphQL query variables
 * @return {Object}           Response data
 */
const metaNetworkRequest = (query, variables) =>
  KordNetwork.request(query, variables)

export default metaNetworkRequest
