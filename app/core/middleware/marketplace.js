import { hasAsyncActionSucceeded, isDomainAction } from 'core/util'
import { actions as ClaimsActions } from 'domains/claims'
import { actionTypes as marketplace, name } from 'domains/marketplace'

const MarketplaceMiddleware = ({ dispatch }) => next => action => {
  // action not in namespace? abort!
  if (!isDomainAction(name, action.type)) return next(action)

  if (
    marketplace.GET_MARKETPLACES === action.type &&
    hasAsyncActionSucceeded(action)
  ) {
    // read claims from each marketplace graph
    Object.values(action.payload).map(marketplace =>
      Object.values(marketplace).map(service => {
        dispatch(ClaimsActions.readClaimsByGraph(service.graphUriPath))
      })
    )
  }

  return next(action)
}

export default MarketplaceMiddleware
