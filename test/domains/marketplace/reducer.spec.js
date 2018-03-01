import { LIFECYCLE } from 'redux-pack'

import { makeAsyncAction, noop } from '~/util'
import getMarketplacesActionPayload from './fixtures/get-marketplaces-action-payload.json'
import { actionTypes, reducer } from 'domains/marketplace'
import { initialState } from 'domains/marketplace/reducer'

describe('domains/marketplace/reducer', () => {
  it('Should return reducer default output', () => {
    const actual = reducer(undefined, {})
    const expected = initialState

    expect(actual).toEqual(expected)
  })

  it('Should return reducer GET_MARKETPLACES action output', () => {
    const actual = reducer(
      initialState,
      makeAsyncAction(LIFECYCLE.SUCCESS, {
        type: actionTypes.GET_MARKETPLACES,
        payload: getMarketplacesActionPayload,
      })
    )
    const expected = initialState.merge(getMarketplacesActionPayload)

    expect(actual).toEqual(expected)
  })
})
