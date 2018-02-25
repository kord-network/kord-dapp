import { Marketplace } from 'core/services'

import * as actions from './actionTypes'

/**
 * Get the available marketplaces from KORD
 *
 * @return {Object}
 */
export const getMarketplaces = () => ({
  type: actions.GET_MARKETPLACES,
  promise: Marketplace.getMarketPlaces().then(markets => markets),
})
