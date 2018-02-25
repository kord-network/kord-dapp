import { hasAsyncActionSucceeded, isDomainAction } from 'core/util'
import { actionTypes as marketplace } from 'domains/marketplace'
import { actions as ClaimsActions } from 'domains/claims'
import { getServiceProdiverUris } from 'core/services/marketplace'

const MarketplaceMiddleware = ({ dispatch }) => next => action => {
  // action not in namespace? abort!
  if (!isDomainAction(name, action.type)) return next(action)

  if (
    marketplace.GET_MARKETPLACES === action.type &&
    hasAsyncActionSucceeded(action)
  ) {
    // Get the available market types
    const markets = action.payload

    if (Object.keys(markets).length) {
      // Get the graph URI for each service provider
      const uris = getServiceProdiverUris(markets)

      // Get the claims made by each service provider
      // The retrieval of profile claims is handled in the `claims` middleware
      uris.map(uri => dispatch(ClaimsActions.readClaimsByGraph(uri)))
    }
  }

  return next(action)
}

export default MarketplaceMiddleware
