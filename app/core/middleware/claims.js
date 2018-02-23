import { Actions as farce } from 'farce'
import { identityClaims } from 'meta.js'

import { routes } from 'core/routes'
import {
  hasAsyncActionFailed,
  hasAsyncActionSucceeded,
  isDomainAction,
} from 'core/util'
import { actionTypes as claims } from 'domains/claims'
import { actions as profile } from 'domains/profile'

const ClaimsMiddleware = ({ dispatch }) => next => action => {
  // action not in namespace? abort!
  if (!isDomainAction(name, action.type)) return next(action)

  if (claims.CREATE_CLAIM === action.type && hasAsyncActionFailed(action)) {
    // redirect to Claim page
    dispatch(farce.push(routes.claim.path))
  }

  if (claims.CREATE_CLAIM === action.type && hasAsyncActionSucceeded(action)) {
    // check if new claim is a profile claim
    if (identityClaims.isProfileClaim(action.payload.createClaim)) {
      // resolve new profile claim hash
      dispatch(profile.addProfileClaims([action.payload.createClaim]))
    }

    // redirect to Home page
    dispatch(farce.push(routes.home.path))
  }

  if (claims.READ_CLAIMS === action.type && hasAsyncActionSucceeded(action)) {
    // resolve any profile claim hashes
    dispatch(profile.addProfileClaims(action.payload.claim))
  }

  return next(action)
}

export default ClaimsMiddleware
