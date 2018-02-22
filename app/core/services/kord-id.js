import { KordNetwork } from 'core/services'

/**
 * Create a new KORD Identity and Claims Graph
 *
 * @param  {Object} variables                    Query variables
 * @param  {Object} variables.identity           IdentityInput object
 * @param  {String} variables.identity.owner     Ethereum address of KORD Identity
 * @param  {String} variables.identity.signature `username` signed with `owner` private key
 * @param  {String} variables.identity.username  Unique username
 * @return {Object}                              Response data
 */
export const createIdentity = variables => {
  return KordNetwork.makeRequest(
    `
      mutation CreateIdentity($identity: IdentityInput!) {
        createIdentity(input: $identity) {
          id
          owner
          signature
          username
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
 * Read all verifiable claims from a KORD Claims Graph by `claim`, `graph`,
 * `issuer`, `property` or `subject`
 *
 * @param  {Object} variables                   Query variables
 * @param  {Object} variables.filter            ClaimFilter object
 * @param  {String} [variables.filter.claim]    Value of the claim
 * @param  {String} variables.filter.graph      URI of the claim graph
 * @param  {String} [variables.filter.issuer]   Ethereum address of issuer
 * @param  {String} [variables.filter.property] Key of the claim
 * @param  {String} [variables.filter.subject]  Ethereum address of subject
 * @return {Object}                             Response data
 */
export const readClaims = variables => {
  return KordNetwork.makeRequest(
    `
      query readClaims($filter: ClaimFilter!) {
        claim (filter: $filter) {
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
