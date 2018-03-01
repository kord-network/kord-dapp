import * as actions from './actionTypes'

export const clearSession = () => ({
  type: actions.CLEAR_SESSION,
})

/**
 * Signal the start of a new session
 *
 * @return {Object} Flux Standard Action
 */
export const newSession = () => ({
  type: actions.NEW_SESSION,
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

/**
 * Start session and set account
 *
 * @param  {Object}  account           		Ethereum account object
 * @param  {String}  account.address   		Public address
 * @param  {String}  account.privateKey		Private key
 * @param  {Object}  keystore          		Encrypted Ethereum keystore object
 * @return {Object}                    		Flux Standard Action
 */
export const unlockAccount = (account, keystore) => ({
  type: actions.UNLOCK_ACCOUNT,
  payload: { account, keystore },
})
