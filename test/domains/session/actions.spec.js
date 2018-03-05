import { isFSA } from 'flux-standard-action'

import { actions, actionTypes } from 'domains/session'
import lockAccountActionPayload from './fixtures/lock-account-action-payload.json'
import setIsNewUserActionPayload from './fixtures/set-is-new-user-action-payload.json'
import setOAuthClaimMessageActionPayload from './fixtures/set-oauth-claim-message-action-payload.json'
import unlockAccountActionPayload from './fixtures/unlock-account-action-payload.json'

describe('domains/session/actions', () => {
  describe('session/CLEAR_SESSION action', () => {
    it('Should return a Flux Standard Action', () => {
      const actual = isFSA(actions.clearSession())

      expect(actual).toBeTruthy()
    })

    it('Should return action payload', () => {
      const actual = actions.clearSession()
      const expected = {
        type: actionTypes.CLEAR_SESSION,
      }

      expect(actual).toEqual(expected)
    })
  })

  describe('session/LOCK_ACCOUNT action', () => {
    it('Should return a Flux Standard Action', () => {
      const actual = isFSA(actions.lockAccount())

      expect(actual).toBeTruthy()
    })

    it('Should return action payload', () => {
      const actual = actions.lockAccount()
      const expected = {
        payload: lockAccountActionPayload,
        type: actionTypes.LOCK_ACCOUNT,
      }

      expect(actual).toEqual(expected)
    })
  })

  describe('session/NEW_SESSION action', () => {
    it('Should return a Flux Standard Action', () => {
      const actual = isFSA(actions.newSession())

      expect(actual).toBeTruthy()
    })

    it('Should return action payload', () => {
      const actual = actions.newSession()
      const expected = {
        type: actionTypes.NEW_SESSION,
      }

      expect(actual).toEqual(expected)
    })
  })

  describe('session/SET_IS_NEW_USER action', () => {
    it('Should return a Flux Standard Action', () => {
      const actual = isFSA(
        actions.setIsNewUser(setIsNewUserActionPayload.isNewUser)
      )

      expect(actual).toBeTruthy()
    })

    it('Should return action payload', () => {
      const actual = actions.setIsNewUser(setIsNewUserActionPayload.isNewUser)
      const expected = {
        payload: setIsNewUserActionPayload,
        type: actionTypes.SET_IS_NEW_USER,
      }

      expect(actual).toEqual(expected)
    })
  })

  describe('session/SET_OAUTH_CLAIM_MESSAGE action', () => {
    it('Should return a Flux Standard Action', () => {
      const actual = isFSA(actions.setOAuthClaimMessage(''))

      expect(actual).toBeTruthy()
    })

    it('Should return action payload', () => {
      const actual = actions.setOAuthClaimMessage(
        setOAuthClaimMessageActionPayload.oAuthClaimMessage
      )
      const expected = {
        payload: setOAuthClaimMessageActionPayload,
        type: actionTypes.SET_OAUTH_CLAIM_MESSAGE,
      }

      expect(actual).toEqual(expected)
    })
  })

  describe('session/UNLOCK_ACCOUNT action', () => {
    it('Should return a Flux Standard Action', () => {
      const actual = isFSA(actions.unlockAccount({}, {}, true))

      expect(actual).toBeTruthy()
    })

    it('Should return action payload', () => {
      const {
        account,
        keystore,
        persistDecryptedKeystore,
      } = unlockAccountActionPayload

      const actual = actions.unlockAccount(
        account,
        keystore,
        persistDecryptedKeystore
      )
      const expected = {
        payload: unlockAccountActionPayload,
        type: actionTypes.UNLOCK_ACCOUNT,
      }

      expect(actual).toEqual(expected)
    })
  })
})
