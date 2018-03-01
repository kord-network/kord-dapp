import { identity } from 'meta.js'

import { KordGraph } from 'core/services'
import * as actions from './actionTypes'

/**
 * Create a KORD Identity graph
 *
 * @param  {String} address Account Ethereum address
 * @return {Object} 				Flux Standard Action
 */
export const createIdentity = address => ({
  type: actions.CREATE_IDENTITY,
  promise: KordGraph.createGraph({
    graph: identity.createGraphObject(address),
  }),
})
