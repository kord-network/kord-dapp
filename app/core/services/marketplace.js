import { BASE_NAME } from 'core/constants'
/**
 *
 * Get all the marketplaces from KORD network
 *
 * @note This is currently seved from a static JSON file,
 * but will be replaced by a network call to KORD in due course
 *
 *	@returns {Object} Keyed by market type
 */
export const getMarketPlaces = () =>
  fetch(`${BASE_NAME}static-api/marketplace.json`).then(res => res.json())
