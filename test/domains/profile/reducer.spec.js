import { LIFECYCLE } from 'redux-pack'

import { actionTypes, reducer } from 'domains/profile'
import { initialState } from 'domains/profile/reducer'
import { makeAsyncAction, noop } from '~/util'
import resolvedProfileClaim from './fixtures/resolved-profile-claim.json'

describe('domains/profile/reducer', () => {
  it('Should return reducer default output', () => {
    const actual = reducer(undefined, {})
    const expected = initialState

    expect(actual).toEqual(expected)
  })

  it('Should return reducer profile/ADD_PROFILE_CLAIMS action output', () => {
    const actual = reducer(
      initialState,
      makeAsyncAction(LIFECYCLE.SUCCESS, {
        type: actionTypes.ADD_PROFILE_CLAIMS,
        payload: resolvedProfileClaim,
      })
    )
    const expected = initialState.merge(resolvedProfileClaim)

    expect(actual).toEqual(expected)
  })
})
