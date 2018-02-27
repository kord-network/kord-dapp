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
  meta: { graph: claim.graph },
  type: actions.CREATE_CLAIM,
  promise: KordGraph.createClaim({ claim }),
})

/**
 * Read verified claims from a KORD Claims Graph
 *
 * @param  {String} graph URI of claims graph
 * @return {Object}       Flux Standard Action
 */
export const readClaimsByGraph = graph => ({
  meta: { graph },
  type: actions.READ_CLAIMS,
  promise: KordGraph.readClaimsByGraph({
    id: graph,
    filter: { subject: graph },
  }),
})
