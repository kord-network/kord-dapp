import { isDomainAction } from 'core/util'
import { actions as ClaimsActions } from 'domains/claims'
import { actionTypes as session, name } from 'domains/session'

const SessionMiddleware = ({ dispatch }) => next => action => {
  // action not in namespace? abort!
  if (!isDomainAction(name, action.type)) return next(action)

  if (session.UNLOCK_ACCOUNT === action.type) {
    // fetch user's KORD Claims Graph
    dispatch(ClaimsActions.readClaimsByGraph(action.payload.account.address))
  }

  return next(action)
}

export default SessionMiddleware
