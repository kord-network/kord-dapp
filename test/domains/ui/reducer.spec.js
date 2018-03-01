import updateActionPayload from './fixtures/update-action-payload.json'
import { actionTypes, reducer } from 'domains/ui'
import { initialState } from 'domains/ui/reducer'

describe('domains/ui/reducer', () => {
  it('Should return reducer default output', () => {
    const actual = reducer(undefined, {})
    const expected = initialState

    expect(actual).toEqual(expected)
  })

  it('Should return reducer RESET action output', () => {
    const actual = reducer(initialState, { type: actionTypes.RESET })
    const expected = initialState.merge(initialState.toJS())

    expect(actual).toEqual(expected)
  })

  it('Should return reducer UPDATE action output', () => {
    const actual = reducer(initialState, {
      type: actionTypes.UPDATE,
      payload: updateActionPayload,
    })
    const expected = initialState.merge(updateActionPayload)

    expect(actual).toEqual(expected)
  })
})
