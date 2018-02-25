import { BASE_NAME } from 'core/constants'

/**
 * Get all the marketplaces from KORD network
 *
 * @description This is currently seved from a static JSON file,
 * but will be replaced by a network call to KORD in due course
 *
 * @returns {Object} Keyed by market type
 */
export const getMarketPlaces = () =>
  fetch(`${BASE_NAME}static-api/marketplace.json`).then(res => res.json())

/**
 * Get the graph URI for each service provider, from each market
 *
 * @param {Object} markets The response payload from `getMarketPlaces`
 * @return {Array}					Graph URIs
 */
export const getServiceProdiverUris = markets =>
  Object.keys(markets)
    .map(market =>
      Object.keys(markets[market]).map(
        service =>
          markets[market][service].hasOwnProperty('graphUriPath') &&
          markets[market][service].graphUriPath
      )
    )
    .reduce((a, b) => a.concat(b))
