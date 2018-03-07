import { identity as MetaIdentity } from 'kord.js'

import { hasAsyncActionFailed, hasAsyncActionSucceeded } from 'core/util'
import { actionTypes as claims } from 'domains/claims'
import {
  actions as IdentityActions,
  actionTypes as identity,
} from 'domains/identity'
import {
  actions as SessionActions,
  selectors as SessionSelectors,
} from 'domains/session'

const GraphMiddleware = ({ dispatch, getState }) => next => action => {
  if (
    (claims.CREATE_CLAIM === action.type ||
      identity.CREATE_IDENTITY === action.type) &&
    hasAsyncActionSucceeded(action)
  ) {
    const account = SessionSelectors.account(getState())

    dispatch(
      IdentityActions.setGraph(
        MetaIdentity.createSetGraphInput(
          account,
          action.payload.extensions.meta.swarmHash
        )
      )
    )
  }

  if (
    identity.SET_GRAPH === action.type &&
    (hasAsyncActionFailed(action) || hasAsyncActionSucceeded(action))
  ) {
    const persistDecryptedKeystore = SessionSelectors.persistDecryptedKeystore(
      getState()
    )

    if (persistDecryptedKeystore) {
      dispatch(SessionActions.lockAccount())
    }
  }

  return next(action)
}

export default GraphMiddleware
