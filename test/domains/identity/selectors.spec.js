import Immutable from 'immutable'
import { createStructuredSelector } from 'reselect'

import { selectors } from 'domains/identity'
import { initialState } from 'domains/identity/reducer'

const structuredSelector = createStructuredSelector(selectors)(
  Immutable.Map({ identity: initialState })
)

describe('domains/identity/selectors', () => {
  describe('Static selectors', () => {
    it('Should return identity selector output', () => {
      const actual = structuredSelector.identity
      const expected = initialState

      expect(actual).toEqual(expected)
    })
  })
})
