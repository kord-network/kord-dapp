import { createSelector } from 'reselect'

import { selectors as Claims } from 'domains/claims'
import { name } from './constants'

/**
 * Select the entire domain from the store by `name`
 *
 * @param  {Object} state Redux store
 * @return {Object}       Domain state
 */
const getAll = state => state.get(name)

/**
 * Get session account
 *
 * @type {Object}
 */
const getAccount = createSelector(getAll, state => {
  return state.get('account') && state.get('account').toObject()
})

/**
 * Get session account address
 *
 * @type {String}
 */
const getAccountAddress = createSelector(getAll, state => {
  return state.getIn(['account', 'address'])
})

/**
 * Get new user flag
 *
 * @type {Boolean}
 */
const getIsNewUser = createSelector(getAll, state => {
  return state.get('isNewUser')
})

/**
 * Get OAuth claim message
 *
 * @type {String}
 */
const getOAuthClaimMessage = createSelector(getAll, state => {
  return state.get('oAuthClaimMessage')
})

/**
 * Get persist decrypted keystore flag
 *
 * @type {Boolean}
 */
const getPersistDecryptedKeystore = createSelector(getAll, state => {
  return state.get('persistDecryptedKeystore')
})

/**
 * Get KORD Claims Graph of session account
 *
 * @type {Object}
 */
const getSessionClaimsGraph = createSelector(
  [getAccountAddress, Claims.claimsWithProfileData],
  (address, claims) => {
    if (!address && !claims) {
      return null
    }

    return claims[address]
  }
)

export default {
  account: getAccount,
  accountAddress: getAccountAddress,
  isNewUser: getIsNewUser,
  oAuthClaimMessage: getOAuthClaimMessage,
  persistDecryptedKeystore: getPersistDecryptedKeystore,
  sessionClaimsGraph: getSessionClaimsGraph,
}
