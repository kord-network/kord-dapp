import Immutable from 'immutable'
import { createStructuredSelector } from 'reselect'

import { selectors } from 'domains/session'
import { initialState as rawInitialState } from 'domains/session/reducer'

// transform raw initial state to an Immutable data object
const initialState = Immutable.fromJS(rawInitialState)

// initialize selectors with initial state
const structuredSelector = createStructuredSelector(selectors)(
  Immutable.Map({ session: initialState })
)

describe('domains/session/selectors', () => {
  describe('Static selectors', () => {
    it('Should return account selector output', () => {
      const actual = structuredSelector.account
      const expected = initialState.get('account')

      expect(actual).toEqual(expected)
    })

    it('Should return accountAddress selector output', () => {
      const actual = structuredSelector.accountAddress
      const expected = initialState.getIn(['account', 'address'])

      expect(actual).toEqual(expected)
    })

    it('Should return isNewUser selector output', () => {
      const actual = structuredSelector.isNewUser
      const expected = initialState.get('isNewUser')

      expect(actual).toEqual(expected)
    })

    it('Should return oAuthClaimMessage selector output', () => {
      const actual = structuredSelector.oAuthClaimMessage
      const expected = initialState.get('oAuthClaimMessage')

      expect(actual).toEqual(expected)
    })

    it('Should return persistDecryptedKeystore selector output', () => {
      const actual = structuredSelector.persistDecryptedKeystore
      const expected = initialState.get('persistDecryptedKeystore')

      expect(actual).toEqual(expected)
    })
  })
})
