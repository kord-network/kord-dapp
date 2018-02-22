import { identity } from 'meta.js'

import { KordId } from 'core/services'
import * as actions from './actionTypes'

/**
 * Create a KORD Identity and Claims Graph
 *
 * @param  {Object} account            Ethereum account object
 * @param  {String} account.address    Account Ethereum address
 * @param  {String} account.privateKey Account private key
 * @param  {String} username           Unique username
 * @return {Object}                    Flux Standard Action
 */
export const createIdentity = (account, username) => ({
  type: actions.CREATE_IDENTITY,
  promise: KordId.createIdentity({
    identity: identity.createIdentityObject(
      account,
      identity.getUsernameFromName(username)
    ),
  }),
})
