import { KordClaims } from 'core/services'
import * as actions from './actionTypes'

/**
 * Store profile claims data fetched from Swarm
 *
 * @param  {Array}  claims Set of KORD Claim objects
 * @return {Object}        Flux Standard Action
 */
export const addProfileClaims = claims => ({
  type: actions.ADD_PROFILE_CLAIMS,
  promise: KordClaims.fetchProfileClaims(claims),
})
