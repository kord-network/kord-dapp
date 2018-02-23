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
 * Select the Identity Providers
 *
 * @param  {Object} state Redux store
 * @return {Object} 			Keyed by service provider name
 */
const getIdentityProviders = createSelector(getAll, state =>
  state.get('IdentityProviders')
)

export default {
  markets: getAll,
  identityProviders: getIdentityProviders,
}
