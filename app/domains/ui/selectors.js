import { createSelector } from 'reselect'

import { name } from './constants'

/**
 * Select the entire domain from the store by `name`
 *
 * @param  {Object} state Redux store
 * @return {Object}       Domain state
 */
const getAll = state => state.get(name)

/**
 * Get application error status
 *
 * @type {Array}
 */
const getError = createSelector([getAll], state => {
  return state.get('error') && state.get('error').toJS()
})

/**
 * Get application network request status
 *
 * @type {Boolean}
 */
const getIsRequesting = createSelector([getAll], state => {
  return state.get('isRequesting')
})

export default {
  error: getError,
  isRequesting: getIsRequesting,
  ui: getAll,
}
