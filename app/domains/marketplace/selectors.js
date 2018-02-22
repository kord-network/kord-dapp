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
 * Select the markets from store
 *
 *	@returns {Object} Keyed by market type
 */
const getMarkets = createSelector(getAll, state => state.get('markets'))

/**
 * Select the Identity Providers
 *
 * @return {Object} Keyed by service provider name
 */
const getIdentityProviders = createSelector(
  getMarkets,
  markets => markets && markets.get('IdentityProviders')
)

export default {
  markets: getMarkets,
  identityProviders: getIdentityProviders,
}
