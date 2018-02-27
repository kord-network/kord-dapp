import { accounts } from 'core/util'

import * as actions from './actionTypes'

/**
 * Start session and set account
 *
 * @param  {Object}  keystore          Encrypted Ethereum keystore
 * @param  {String}  password          Password for the keystore
 * @return {Object}                    Flux Standard Action
 */
export const unlockAccount = (keystore, password) => ({
  type: actions.UNLOCK_ACCOUNT,
  payload: {
    keystore: JSON.parse(keystore),
    account: accounts.create(JSON.parse(keystore), password),
  },
})

/**
 * Set the newly created user flag
 *
 * @param  {Boolean} isNewUser Newly created user flag
 * @return {Object}            Flux Standard Action
 */
export const setIsNewUser = isNewUser => ({
  type: actions.SET_IS_NEW_USER,
  payload: { isNewUser },
})

/**
 * Store a claim message sent to an OAuth provider for retrieval after callback
 *
 * @param  {String} oAuthClaimMessage Raw claim message
 * @return {Object}                   Flux Standard Action
 */
export const setOAuthClaimMessage = oAuthClaimMessage => ({
  type: actions.SET_OAUTH_CLAIM_MESSAGE,
  payload: { oAuthClaimMessage },
})
