import { actions, actionTypes } from 'domains/profile'
import { isAsyncAction, noop } from '~/util'
import profileClaim from './fixtures/profile-claim.json'

jest.mock('core/services/kord-claims')

describe('domains/profile/actions', () => {
  describe('profile/ADD_PROFILE_CLAIMS action', () => {
    it('Should return a standard async action', () => {
      const actual = isAsyncAction(actions.addProfileClaims([profileClaim]))

      expect(actual).toBeTruthy()
    })

    it('Should return action payload', () => {
      const actual = actions.addProfileClaims([profileClaim])
      const expected = {
        promise: new Promise(noop),
        type: actionTypes.ADD_PROFILE_CLAIMS,
      }

      expect(actual).toEqual(expected)
    })
  })
})
