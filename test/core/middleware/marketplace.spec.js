import { LIFECYCLE } from 'redux-pack'

import middleware from 'core/middleware/marketplace'
import { actionTypes as claims } from 'domains/claims'
import { actionTypes } from 'domains/marketplace'
import { makeAsyncAction, makeMiddlewareMockFunctions } from '~/util'
import getMarketplacesActionPayload from '~/domains/marketplace/fixtures/get-marketplaces-action-payload.json'

describe('core/middleware/marketplace', () => {
  let invoke, next, store

  beforeAll(() => {
    const mocks = makeMiddlewareMockFunctions(middleware)

    invoke = mocks.invoke
    next = mocks.next
    store = mocks.store
  })

  it('Should pass through unobserved action', () => {
    const action = { type: 'marketplace/TEST_UNOBS_ACTION' }

    invoke(action)

    expect(next).toHaveBeenCalledWith(action)
  })

  it('Should pass through non-domain action', () => {
    const action = { type: 'TEST_NON_DOMAIN_ACTION' }

    invoke(action)

    expect(next).toHaveBeenCalledWith(action)
  })

  it('Should dispatch claims/READ_CLAIMS action on GET_MARKETPLACES action success', () => {
    const action = makeAsyncAction(LIFECYCLE.SUCCESS, {
      payload: getMarketplacesActionPayload,
      type: actionTypes.GET_MARKETPLACES,
    })

    invoke(action)

    expect(store.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({ type: claims.READ_CLAIMS })
    )
    expect(next).toHaveBeenCalledWith(action)
  })
})
