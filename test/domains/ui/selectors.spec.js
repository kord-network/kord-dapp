import Immutable from 'immutable'
import { createStructuredSelector } from 'reselect'

import { selectors } from 'domains/ui'
import { initialState } from 'domains/ui/reducer'

const structuredSelector = createStructuredSelector(selectors)(
  Immutable.Map({ ui: initialState })
)

describe('domains/ui/selectors', () => {
  it('Should return error selector output', () => {
    const actual = structuredSelector.error
    const expected = initialState.get('error')

    expect(actual).toEqual(expected)
  })

  it('Should return isRequesting selector output', () => {
    const actual = structuredSelector.isRequesting
    const expected = initialState.get('isRequesting')

    expect(actual).toEqual(expected)
  })

  it('Should return ui selector output', () => {
    const actual = structuredSelector.ui
    const expected = initialState

    expect(actual).toEqual(expected)
  })
})
