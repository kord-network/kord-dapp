import { bufferToHex } from 'ethereumjs-util'
import { generate } from 'ethereumjs-wallet'
import { LIFECYCLE } from 'redux-pack'

import { actionTypes, reducer } from 'domains/identity'
import { createIdentity, initialState } from 'domains/identity/reducer'
import createIdentityActionPayload from './fixtures/create-identity-action-payload.json'
import { makeAsyncAction, noop } from '~/util'

describe('domains/identity/reducer', () => {
  it('Should return reducer default output', () => {
    const actual = reducer(undefined, {})
    const expected = initialState

    expect(actual).toEqual(expected)
  })

  it('Should return reducer identity/CREATE_IDENTITY action output', () => {
    // generate a new public address
    const address = bufferToHex(generate().getAddress())

    // update test data with public address
    createIdentityActionPayload.data.createGraph.id = address

    const actual = reducer(
      initialState,
      makeAsyncAction(LIFECYCLE.SUCCESS, {
        type: actionTypes.CREATE_IDENTITY,
        payload: createIdentityActionPayload,
      })
    )
    const expected = initialState.merge({
      [createIdentityActionPayload.data.createGraph.id]: createIdentity(
        createIdentityActionPayload.data.createGraph
      ),
    })

    expect(actual).toEqual(expected)
  })
})
