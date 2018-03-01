import { KordGraph } from 'core/services'
import * as actions from './actionTypes'

/**
 * Add a verified claim to a KORD Claims Graph
 *
 * @param  {Object} claim            Verified claim data
 * @param  {String} claim.claim      Value of the claim
 * @param  {String} claim.graph      URI of claims graph
 * @param  {String} claim.issuer     Ethereum address of claim issuer
 * @param  {String} claim.property   Property of the claim
 * @param  {String} claim.signature  `claim` value signed with `issuer` private key
 * @param  {String} claim.subject    Ethereum address of claim subject
 * @return {Object}                  Flux Standard Action
 */
export const createClaim = claim => ({
  type: actions.CREATE_CLAIM,
  promise: KordGraph.createClaim({ claim }),
})

/**
 * Read verified claims from a KORD Claims Graph
 *
 * @param  {String} id                 KORD ID
 * @param  {Object} [filter]           Claim filter object
 * @param  {String} [filter.issuer]    Ethereum address of issuer
 * @param  {String} [filter.subject]   Ethereum address of subject
 * @param  {String} [filter.property]  Key of the claim
 * @param  {String} [filter.claim]     Value of the claim
 * @param  {String} [filter.signature] Issuer's signature of the claim
 * @return {Object}                    Flux Standard Action
 */
export const readClaimsByGraph = (id, filter = {}) => ({
  type: actions.READ_CLAIMS,
  promise: KordGraph.readClaimsByGraph({
    id,
    filter,
  }),
})
