import Immutable from 'immutable'
import { createStructuredSelector } from 'reselect'

import { selectors } from 'domains/claims'
import { initialState } from 'domains/claims/reducer'

const structuredSelector = createStructuredSelector(selectors)(
  Immutable.Map({ claims: initialState })
)

describe('domains/claims/selectors', () => {
  describe('Static selectors', () => {
    it('Should return claims selector output', () => {
      const actual = structuredSelector.claims
      const expected = initialState

      expect(actual).toEqual(expected)
    })
  })
})
