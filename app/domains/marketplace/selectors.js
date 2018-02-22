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
const getAllMarkets = createSelector(getAll, state => state.get('markets'))

export default {
  markets: getAllMarkets,
}
