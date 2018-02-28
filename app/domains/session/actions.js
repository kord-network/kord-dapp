import * as actions from './actionTypes'

/**
 * Start session and set account
 *
 * @param  {Object}  keystore          		Encrypted Ethereum keystore object
 * @param  {Object}  account           		Ethereum account object
 * @param  {String}  account.address   		Public address
 * @param  {String}  account.privateKey		Private key
 * @return {Object}                    		Flux Standard Action
 */
export const unlockAccount = (keystore, account) => ({
  type: actions.UNLOCK_ACCOUNT,
  payload: { keystore, account },
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
