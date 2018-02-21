import * as actions from './actionTypes'

/**
 * Reset UI state
 *
 * @return {Object} Flux Standard Action
 */
export const reset = () => ({
  type: actions.RESET,
})

/**
 * Generic UI update
 *
 * @param  {Object} payload UI state
 * @return {Object}         Flux Standard Action
 */
export const update = payload => ({
  type: actions.UPDATE,
  payload,
})
