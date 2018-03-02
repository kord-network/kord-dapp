import { isFSA } from 'flux-standard-action'

import updateActionPayload from './fixtures/update-action-payload.json'
import { actions, actionTypes } from 'domains/ui'

describe('domains/ui/actions', () => {
  describe('ui/RESET action', () => {
    it('Should return a Flux Standard Action', () => {
      const actual = isFSA(actions.reset())

      expect(actual).toBeTruthy()
    })

    it('Should return action payload', () => {
      const actual = actions.reset()
      const expected = { type: actionTypes.RESET }

      expect(actual).toEqual(expected)
    })
  })

  describe('ui/UPDATE action', () => {
    it('Should return a Flux Standard Action', () => {
      const actual = isFSA(actions.update(updateActionPayload))

      expect(actual).toBeTruthy()
    })

    it('Should return action payload', () => {
      const actual = actions.update(updateActionPayload)
      const expected = {
        type: actionTypes.UPDATE,
        payload: updateActionPayload,
      }

      expect(actual).toEqual(expected)
    })
  })
})
