import { KordNetwork } from 'core/services'

/**
 * Create a new KORD Graph
 *
 * @param  {Object} variables                    Query variables
 * @param  {Object} variables.graph              GraphInput object
 * @param  {String} variables.graph.id           Ethereum address of KORD agents graph
 * @return {Object}                              Response data
 */
export const createGraph = variables => {
  return KordNetwork.makeRequest(
    `
      mutation CreateGraph($graph: GraphInput!) {
        createGraph(input: $graph) {
          id
        }
      }
    `,
    variables
  )
}

/**
 * Add a new verifiable claim to a KORD Claims Graph
 *
 * @param  {Object} variables                 Query variables
 * @param  {Object} variables.claim           ClaimInput object
 * @param  {String} variables.claim.claim     Value of the claim
 * @param  {String} variables.claim.graph     URI of the claim graph
 * @param  {String} variables.claim.issuer    Ethereum address of issuer
 * @param  {String} variables.claim.property  Key of the claim
 * @param  {String} variables.claim.signature Issuer's signature of the claim
 * @param  {String} variables.claim.subject   Ethereum address of subject
 * @return {Object}                           Response data
 */
export const createClaim = variables => {
  return KordNetwork.makeRequest(
    `
      mutation CreateClaim($claim: ClaimInput!) {
        createClaim(input: $claim) {
          id
          claim
          graph
          issuer
          property
          signature
          subject
        }
      }
    `,
    variables
  )
}

/**
 * Read the graph of a network agent
 * `id` argument
 *
 * @param  {Object} variables                   Query variables
 * @param  {String} variables.id                URI of the agents graph (ETH public addr)
 * @return {Object}                             Response data
 */
export const readGraph = variables => {
  return KordNetwork.makeRequest(
    `
      query readGraph($id: String!) {
        graph(id: $id) {
          id
        }
      }
    `,
    variables
  )
}

/**
 * Read all verifiable claims from a KORD Claims Graph by `graph`, `claim`
 * `id` => `graph`, issuer`, `property`, `subject` or `claim`
 *
 * @param  {Object} variables                     Query variables
 * @param  {Object} variables.filter              ClaimFilter object
 * @param  {String} variables.id                  URI of the agents graph (ETH public addr)
 * @param  {String} variables.filter.graph        URI of the agents graph
 * @param  {String} [variables.filter.issuer]     Ethereum address of issuer
 * @param  {String} [variables.filter.subject]    Ethereum address of subject
 * @param  {String} [variables.filter.property]   Key of the claim
 * @param  {String} [variables.filter.claim]      Value of the claim
 * @return {Object}                               Response data
 */
export const readClaimsByGraph = variables => {
  return KordNetwork.makeRequest(
    `
      query readClaimsByGraph($id: String!, $filter: ClaimFilter!) {
        graph(id: $id) {
          claim (filter: $filter) {
            graph
            issuer
            subject
            property
            claim
          }
        }
      }
    `,
    variables
  )
}
