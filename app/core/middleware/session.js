import { Actions as farce } from 'farce'

import { routes } from 'core/routes'
import { hasAsyncActionSucceeded, isDomainAction } from 'core/util'
import { actionTypes as session, name } from 'domains/session'
import { actions as MarketActions } from 'domains/marketplace'

const SessionMiddleware = ({ dispatch }) => next => action => {
  // action not in namespace? abort!
  if (!isDomainAction(name, action.type)) return next(action)

  if (session.LOGIN === action.type && hasAsyncActionSucceeded(action)) {
    // fetch marketplaces from KORD network
    dispatch(MarketActions.getMarketplaces())

    // redirect to Home page
    dispatch(farce.push(routes.home.path))
  }

  return next(action)
}

export default SessionMiddleware
