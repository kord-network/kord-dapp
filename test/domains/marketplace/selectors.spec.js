import Immutable from 'immutable'
import { createStructuredSelector } from 'reselect'

import { selectors } from 'domains/marketplace'
import { initialState } from 'domains/marketplace/reducer'

const structuredSelector = createStructuredSelector(selectors)(
  Immutable.Map({ marketplace: initialState })
)

describe('domains/marketplace/selectors', () => {
  it('Should return identityProviders selector output', () => {
    const actual = structuredSelector.identityProviders
    const expected = initialState.get('IdentityProviders')

    expect(actual).toEqual(expected)
  })

  it('Should return marketplace selector output', () => {
    const actual = structuredSelector.markets
    const expected = initialState

    expect(actual).toEqual(expected)
  })
})
