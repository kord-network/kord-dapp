import * as actions from './actionTypes'

/**
 * Clear session state
 *
 * @return {Object} Flux Standard Action
 */
export const clearSession = () => ({
  type: actions.CLEAR_SESSION,
})

/**
 * Lock account by clearing private key from state
 *
 * @return {Object} Flux Standard Action
 */
export const lockAccount = () => ({
  payload: { account: { privateKey: null } },
  type: actions.LOCK_ACCOUNT,
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
  payload: { isNewUser },
  type: actions.SET_IS_NEW_USER,
})

/**
 * Store a claim message sent to an OAuth provider for retrieval after callback
 *
 * @param  {String} oAuthClaimMessage Raw claim message
 * @return {Object}                   Flux Standard Action
 */
export const setOAuthClaimMessage = oAuthClaimMessage => ({
  payload: { oAuthClaimMessage },
  type: actions.SET_OAUTH_CLAIM_MESSAGE,
})

/**
 * @param  {Object}  account                  Ethereum account object
 * @param  {String}  account.address          Public address
 * @param  {String}  account.privateKey       Private key
 * @param  {Object}  keystore                 Encrypted Ethereum keystore object
 * @param  {Boolean} persistDecryptedKeystore Flag to persist decrypted keystore
 * @return {Object}                           Flux Standard Action
 */
export const unlockAccount = (
  account,
  keystore,
  persistDecryptedKeystore = false
) => ({
  payload: { account, keystore, persistDecryptedKeystore },
  type: actions.UNLOCK_ACCOUNT,
})
