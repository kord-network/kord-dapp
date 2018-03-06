import { actions, actionTypes } from 'domains/claims'
import { isAsyncAction, noop } from '~/util'
import claim from './fixtures/claim.json'

jest.mock('core/services/kord-network')

describe('domains/claims/actions', () => {
  describe('claims/CREATE_CLAIM action', () => {
    it('Should return a standard async action', () => {
      const actual = isAsyncAction(actions.createClaim(claim))

      expect(actual).toBeTruthy()
    })

    it('Should return action payload', () => {
      const actual = actions.createClaim(claim)
      const expected = {
        meta: { graph: claim.graph },
        promise: new Promise(noop),
        type: actionTypes.CREATE_CLAIM,
      }

      expect(actual).toEqual(expected)
    })
  })

  describe('claims/READ_CLAIMS action', () => {
    it('Should return a standard async action', () => {
      const actual = isAsyncAction(actions.readClaimsByGraph(claim.graph))

      expect(actual).toBeTruthy()
    })

    it('Should return action payload', () => {
      const actual = actions.readClaimsByGraph(claim.graph)
      const expected = {
        promise: new Promise(noop),
        type: actionTypes.READ_CLAIMS,
      }

      expect(actual).toEqual(expected)
    })
  })
})
