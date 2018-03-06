import { hasAsyncActionSucceeded, isDomainAction } from 'core/util'
import { actionTypes as claims, name } from 'domains/claims'
import { actions as profile } from 'domains/profile'

const ClaimsMiddleware = ({ dispatch }) => next => action => {
  // action not in namespace? abort!
  if (!isDomainAction(name, action.type)) return next(action)

  if (claims.CREATE_CLAIM === action.type && hasAsyncActionSucceeded(action)) {
    // resolve new profile claim hash
    dispatch(profile.addProfileClaims([action.payload.data.createClaim]))
  }

  if (claims.READ_CLAIMS === action.type && hasAsyncActionSucceeded(action)) {
    // resolve any profile claim hashes
    dispatch(profile.addProfileClaims(action.payload.data.graph.claim))
  }

  return next(action)
}

export default ClaimsMiddleware
