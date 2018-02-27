import { Actions as farce } from 'farce'

import { routes } from 'core/routes'
import { isDomainAction, hasAsyncActionSucceeded } from 'core/util'
import { actions as ClaimsActions } from 'domains/claims'
import { actionTypes as session, name } from 'domains/session'
import { actions as MarketActions } from 'domains/marketplace'

const SessionMiddleware = ({ dispatch }) => next => action => {
  // action not in namespace? abort!
  if (!isDomainAction(name, action.type)) return next(action)

  if (
    session.UNLOCK_ACCOUNT === action.type &&
    hasAsyncActionSucceeded(action)
  ) {
    // fetch user's KORD Claims Graph
    dispatch(ClaimsActions.readClaimsByGraph(action.payload.account.address))

    // fetch marketplaces from KORD network
    dispatch(MarketActions.getMarketplaces())

    // redirect to Home page
    dispatch(farce.push(routes.home.path))
  }

  return next(action)
}

export default SessionMiddleware
