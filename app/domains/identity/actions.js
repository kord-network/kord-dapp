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

/**
 * Update the hash of a KORD Graph
 *
 * @param  {Object} graph           KORD Graph mutation input object
 * @param  {String} graph.hash      KORD Graph hash location
 * @param  {String} graph.id        KORD ID
 * @param  {String} graph.signature Signed KORD Graph hash
 * @return {Object} 				        Flux Standard Action
 */
export const setGraph = graph => ({
  type: actions.SET_GRAPH,
  promise: KordGraph.setGraph({ graph }),
})
