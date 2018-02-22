import { identity } from 'meta.js'

import * as actions from './actionTypes'

/**
 * Start session and set account
 *
 * @param  {Object}  account           Decrypted Ethereum keystore
 * @param  {String}  username          META ID username
 * @param  {Boolean} [isNewUser=false] Flag a newly created user during login process
 * @return {Object}                    Flux Standard Action
 */
export const login = (account, username, isNewUser = false) => ({
  type: actions.LOGIN,
  payload: {
    account,
    graph: identity.getClaimsGraphFromUsername(username),
    isNewUser,
  },
})

/**
 * End session and reset account
 *
 * @return {Object} Flux Standard Action
 */
export const logout = () => ({
  type: actions.LOGOUT,
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
