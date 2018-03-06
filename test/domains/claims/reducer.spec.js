import { bufferToHex } from 'ethereumjs-util'
import { generate } from 'ethereumjs-wallet'
import { LIFECYCLE } from 'redux-pack'

import { actionTypes, reducer } from 'domains/claims'
import { createClaim, initialState } from 'domains/claims/reducer'
import claim from './fixtures/claim.json'
import createClaimResponse from './fixtures/create-claim-response.json'
import readClaimsResponse from './fixtures/read-claims-response.json'
import { makeAsyncAction, noop } from '~/util'

describe('domains/claims/reducer', () => {
  it('Should return reducer default output', () => {
    const actual = reducer(undefined, {})
    const expected = initialState

    expect(actual).toEqual(expected)
  })

  it('Should return reducer claims/CREATE_CLAIM action output', () => {
    const actual = reducer(
      initialState,
      makeAsyncAction(LIFECYCLE.SUCCESS, {
        meta: { graph: claim.graph },
        payload: createClaimResponse,
        type: actionTypes.CREATE_CLAIM,
      })
    )
    const expected = initialState.mergeIn(
      [claim.graph],
      createClaim([createClaimResponse.data.createClaim])
    )

    expect(actual).toEqual(expected)
  })

  it('Should return reducer claims/READ_CLAIMS action output', () => {
    const actual = reducer(
      initialState,
      makeAsyncAction(LIFECYCLE.SUCCESS, {
        meta: { graph: claim.graph },
        payload: readClaimsResponse,
        type: actionTypes.READ_CLAIMS,
      })
    )
    const expected = initialState.mergeIn(
      [claim.graph],
      createClaim(readClaimsResponse.data.graph.claim)
    )

    expect(actual).toEqual(expected)
  })
})
