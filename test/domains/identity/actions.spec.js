import { actions, actionTypes } from 'domains/identity'
import { isAsyncAction, noop } from '~/util'
import identity from './fixtures/identity.json'

jest.mock('core/services/kord-network')

describe('domains/identity/actions', () => {
  describe('identity/CREATE_IDENTITY action', () => {
    it('Should return a standard async action', () => {
      const actual = isAsyncAction(actions.createIdentity(identity.address))

      expect(actual).toBeTruthy()
    })

    it('Should return action payload', () => {
      const actual = actions.createIdentity(identity.address)
      const expected = {
        promise: new Promise(noop),
        type: actionTypes.CREATE_IDENTITY,
      }

      expect(actual).toEqual(expected)
    })
  })

  describe('identity/SET_GRAPH action', () => {
    it('Should return a standard async action', () => {
      const actual = isAsyncAction(actions.setGraph())

      expect(actual).toBeTruthy()
    })

    it('Should return action payload', () => {
      const actual = actions.setGraph()
      const expected = {
        promise: new Promise(noop),
        type: actionTypes.SET_GRAPH,
      }

      expect(actual).toEqual(expected)
    })
  })
})
