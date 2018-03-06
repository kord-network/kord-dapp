import { fromJS } from 'immutable'
import { LIFECYCLE } from 'redux-pack'

import { actionTypes, reducer } from 'domains/session'
import {
  createAccount,
  initialState as rawInitialState,
} from 'domains/session/reducer'
import { makeAsyncAction, noop } from '~/util'
import lockAccountActionPayload from './fixtures/lock-account-action-payload.json'
import setIsNewUserActionPayload from './fixtures/set-is-new-user-action-payload.json'
import setOAuthClaimMessageActionPayload from './fixtures/set-oauth-claim-message-action-payload.json'
import unlockAccountActionPayload from './fixtures/unlock-account-action-payload.json'

describe('domains/session/reducer', () => {
  let initialState

  beforeAll(() => {
    // transform raw initial state to an Immutable data object
    initialState = fromJS(rawInitialState)
  })

  it('Should return reducer default output', () => {
    const actual = reducer(undefined, {})
    const expected = initialState

    expect(actual).toEqual(expected)
  })

  it('Should return reducer session/CLEAR_SESSION action output', () => {
    const actual = reducer(
      initialState,
      makeAsyncAction(LIFECYCLE.SUCCESS, {
        type: actionTypes.CLEAR_SESSION,
      })
    )
    const expected = initialState.merge(initialState)

    expect(actual).toEqual(expected)
  })

  it('Should return reducer session/LOCK_ACCOUNT action output', () => {
    const actual = reducer(
      initialState,
      makeAsyncAction(LIFECYCLE.SUCCESS, {
        payload: lockAccountActionPayload,
        type: actionTypes.LOCK_ACCOUNT,
      })
    )
    const expected = initialState.mergeDeep(lockAccountActionPayload)

    expect(actual).toEqual(expected)
  })

  it('Should return reducer session/SET_IS_NEW_USER action output', () => {
    const actual = reducer(
      initialState,
      makeAsyncAction(LIFECYCLE.SUCCESS, {
        payload: setIsNewUserActionPayload,
        type: actionTypes.SET_IS_NEW_USER,
      })
    )
    const expected = initialState.merge(setIsNewUserActionPayload)

    expect(actual).toEqual(expected)
  })

  it('Should return reducer session/SET_OAUTH_CLAIM_MESSAGE action output', () => {
    const actual = reducer(
      initialState,
      makeAsyncAction(LIFECYCLE.SUCCESS, {
        payload: setOAuthClaimMessageActionPayload,
        type: actionTypes.SET_OAUTH_CLAIM_MESSAGE,
      })
    )
    const expected = initialState.merge(setOAuthClaimMessageActionPayload)

    expect(actual).toEqual(expected)
  })

  it('Should return reducer session/UNLOCK_ACCOUNT action output', () => {
    const actual = reducer(
      initialState,
      makeAsyncAction(LIFECYCLE.SUCCESS, {
        payload: unlockAccountActionPayload,
        type: actionTypes.UNLOCK_ACCOUNT,
      })
    )
    const expected = initialState.mergeDeep({
      account: createAccount(unlockAccountActionPayload.account),
      encryptedKeystores: {
        [unlockAccountActionPayload.account.address]:
          unlockAccountActionPayload.keystore,
      },
      persistDecryptedKeystore:
        unlockAccountActionPayload.persistDecryptedKeystore,
    })

    expect(actual).toEqual(expected)
  })
})
