import { KordNetwork } from 'core/services'

/**
 * Create a new KORD Graph
 *
 * @param  {Object} variables          Query variables
 * @param  {Object} variables.graph    GraphInput object
 * @param  {String} variables.graph.id Ethereum address of KORD agents graph
 * @return {Object}                    Response data
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
 * Set the graph storage location
 *
 * @param  {Object} variables                 Query variables
 * @param  {Object} variables.graph           SetGraphInput object
 * @param  {String} variables.graph.id        Ethereum address of KORD agents graph
 * @param  {String} variables.graph.hash      Graph storage location
 * @param  {String} variables.graph.signature Signed hash of storage location
 * @return {Object}                           Response data
 */
export const setGraph = variables => {
  return KordNetwork.makeRequest(
    `
      mutation SetGraph($graph: SetGraphInput!) {
        setGraph(input: $graph) {
          id
        }
      }
    `,
    variables
  )
}

/**
 * Add a new verified claim to a KORD Graph
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
 * Read verified claims from a KORD Graph
 * `id` => `graph`, issuer`, `property`, `subject` or `claim`
 *
 * @param  {Object} variables                    Query variables
 * @param  {Object} variables.filter             ClaimFilter object
 * @param  {String} variables.id                 ETH address of graph owner
 * @param  {String} [variables.filter.issuer]    Ethereum address of issuer
 * @param  {String} [variables.filter.subject]   Ethereum address of subject
 * @param  {String} [variables.filter.property]  Key of the claim
 * @param  {String} [variables.filter.claim]     Value of the claim
 * @param  {String} [variables.filter.signature] Issuer's signature of the claim
 * @return {Object}                              Response data
 */
export const readClaimsByGraph = variables => {
  return KordNetwork.makeRequest(
    `
      query readClaimsByGraph($id: String!, $filter: ClaimFilter!) {
        graph(id: $id) {
          id
          claim (filter: $filter) {
            issuer
            subject
            property
            claim
            signature
          }
        }
      }
    `,
    variables
  )
}
