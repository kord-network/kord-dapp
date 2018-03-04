import { isDomainAction } from 'core/util'
import { actions as ClaimsActions } from 'domains/claims'
import { name, actionTypes as session } from 'domains/session'
import { actions as MarketplaceActions } from 'domains/marketplace'

const SessionMiddleware = ({ dispatch }) => next => action => {
  // action not in namespace? abort!
  if (!isDomainAction(name, action.type)) return next(action)

  if (session.NEW_SESSION === action.type) {
    // All sessions require the marketplace response data; locked or unlocked accounts
    dispatch(MarketplaceActions.getMarketplaces())
  }

  if (session.UNLOCK_ACCOUNT === action.type) {
    // fetch user's KORD Claims Graph
    dispatch(ClaimsActions.readClaimsByGraph(action.payload.account.address))
  }

  return next(action)
}

export default SessionMiddleware
