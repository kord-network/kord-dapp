import { Marketplace } from 'core/services'

import * as actions from './actionTypes'

/**
 * Get the available marketplaces from KORD
 *
 * @returns {Object}
 */
export const getAllMarketplaces = () => ({
  type: actions.GET_ALL_MARKETPLACES,
  promise: Marketplace.getMarketPlaces().then(markets => markets),
})
