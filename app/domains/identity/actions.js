import { identity } from 'kord.js'

import { KordGraph } from 'core/services'
import * as actions from './actionTypes'

/**
 * Create a KORD Identity graph
 *
 * @param  {String} address Account Ethereum address
 * @return {Object} 				Flux Standard Action
 */
export const createIdentity = address => ({
  promise: KordGraph.createGraph({
    graph: identity.createGraphObject(address),
  }),
  type: actions.CREATE_IDENTITY,
})

/**
 * Update the hash of a KORD Graph
 *
 * @param  {Object} graph           KORD Graph mutation input object
 * @param  {String} graph.hash      KORD Graph hash location
 * @param  {String} graph.id        KORD ID
 * @param  {String} graph.signature Signed KORD Graph hash
 * @return {Object}                 Flux Standard Action
 */
export const setGraph = graph => ({
  promise: KordGraph.setGraph({ graph }),
  type: actions.SET_GRAPH,
})
