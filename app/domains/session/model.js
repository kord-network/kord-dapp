import { Record } from 'immutable'

/**
 * Session account Immutable Record
 *
 * @type {Record}
 */
const Account = new Record({
  address: '',
  privateKey: '',
})

/**
 * Factory function to construct new session account Record
 *
 * @param  {Object} account Account data from decrypted Ethereum keystore
 * @return {Record}
 */
export const accountFactory = account => new Account(account)
