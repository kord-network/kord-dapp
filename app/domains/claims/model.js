import { Record } from 'immutable'

/**
 * Verified KORD claim Immutable Record
 *
 * @type {Record}
 */
const Claim = new Record({
  id: '',
  claim: '',
  graph: '',
  issuer: '',
  property: '',
  signature: '',
  subject: '',
})

/**
 * Factory function to construct new verified KORD claim Record
 *
 * @param  {Object} claim Verified claim data
 * @return {Record}
 */
export const claimFactory = claim => new Claim(claim)
