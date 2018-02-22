import { Record } from 'immutable'

/**
 * KORD Identity Immutable Record
 *
 * @type {Record}
 */
const Identity = new Record({
  id: '',
  owner: '',
  signature: '',
  username: '',
})

/**
 * Factory function to construct new KORD Identity Record
 *
 * @param  {Object} identity KORD Identity
 * @return {Record}
 */
export const identityFactory = identity => new Identity(identity)
