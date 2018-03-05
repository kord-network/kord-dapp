import { LIFECYCLE } from 'redux-pack'

import middleware from 'core/middleware/claims'
import { actionTypes } from 'domains/claims'
import { actionTypes as profile } from 'domains/profile'
import claim from '~/domains/claims/fixtures/claim.json'
import { makeAsyncAction, makeMiddlewareMockFunctions } from '~/util'

describe('core/middleware/claims', () => {
  let invoke, next, store

  beforeAll(() => {
    const mocks = makeMiddlewareMockFunctions(middleware)

    invoke = mocks.invoke
    next = mocks.next
    store = mocks.store
  })

  describe('Unprocessed actions', () => {
    it('Should pass through unobserved action', () => {
      const action = { type: 'claims/TEST_UNOBS_ACTION' }

      invoke(action)

      expect(next).toHaveBeenCalledWith(action)
    })

    it('Should pass through non-domain action', () => {
      const action = { type: 'TEST_NON_DOMAIN_ACTION' }

      invoke(action)

      expect(next).toHaveBeenCalledWith(action)
    })
  })

  describe('Processed actions', () => {
    it('Should dispatch profile/ADD_PROFILE_CLAIMS action on claims/CREATE_CLAIM action success', () => {
      const action = makeAsyncAction(LIFECYCLE.SUCCESS, {
        payload: { data: { createClaim: claim } },
        type: actionTypes.CREATE_CLAIM,
      })

      invoke(action)

      expect(store.dispatch).toHaveBeenCalledWith(
        expect.objectContaining({ type: profile.ADD_PROFILE_CLAIMS })
      )
      expect(next).toHaveBeenCalledWith(action)
    })

    it('Should dispatch profile/ADD_PROFILE_CLAIMS action on claims/READ_CLAIMS action success', () => {
      const action = makeAsyncAction(LIFECYCLE.SUCCESS, {
        payload: { data: { graph: { claim: [claim] } } },
        type: actionTypes.READ_CLAIMS,
      })

      invoke(action)

      expect(store.dispatch).toHaveBeenCalledWith(
        expect.objectContaining({ type: profile.ADD_PROFILE_CLAIMS })
      )
      expect(next).toHaveBeenCalledWith(action)
    })
  })
})
