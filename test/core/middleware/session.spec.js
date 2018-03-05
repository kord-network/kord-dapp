import { LIFECYCLE } from 'redux-pack'

import middleware from 'core/middleware/session'
import { actionTypes as claims } from 'domains/claims'
import { actionTypes as marketplace } from 'domains/marketplace'
import { actionTypes } from 'domains/session'
import { makeAsyncAction, makeMiddlewareMockFunctions } from '~/util'

jest.mock('core/services/kord-network')
jest.mock('core/services/marketplace')

describe('core/middleware/session', () => {
  let invoke, next, store

  beforeAll(() => {
    const mocks = makeMiddlewareMockFunctions(middleware)

    invoke = mocks.invoke
    next = mocks.next
    store = mocks.store
  })

  describe('Unprocessed actions', () => {
    it('Should pass through unobserved action', () => {
      const action = { type: 'session/TEST_UNOBS_ACTION' }

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
    it('Should dispatch marketplace/GET_MARKETPLACES action on session/NEW_SESSION action success', () => {
      const action = makeAsyncAction(LIFECYCLE.SUCCESS, {
        type: actionTypes.NEW_SESSION,
      })

      invoke(action)

      expect(store.dispatch).toHaveBeenCalledWith(
        expect.objectContaining({ type: marketplace.GET_MARKETPLACES })
      )
      expect(next).toHaveBeenCalledWith(action)
    })

    it('Should dispatch claims/READ_CLAIMS action on session/UNLOCK_ACCOUNT action success', () => {
      const action = makeAsyncAction(LIFECYCLE.SUCCESS, {
        payload: {
          account: {
            address: '0xEe078019375fBFEef8f6278754d54Cf415e83329',
          },
        },
        type: actionTypes.UNLOCK_ACCOUNT,
      })

      invoke(action)

      expect(store.dispatch).toHaveBeenCalledWith(
        expect.objectContaining({ type: claims.READ_CLAIMS })
      )
      expect(next).toHaveBeenCalledWith(action)
    })
  })
})
