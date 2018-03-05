import Immutable from 'immutable'
import { createStructuredSelector } from 'reselect'

import { selectors } from 'domains/profile'
import { initialState } from 'domains/profile/reducer'

const structuredSelector = createStructuredSelector(selectors)(
  Immutable.Map({ profile: initialState })
)

describe('domains/profile/selectors', () => {
  describe('Static selectors', () => {
    it('Should return profile selector output', () => {
      const actual = structuredSelector.profile
      const expected = initialState

      expect(actual).toEqual(expected)
    })
  })
})
