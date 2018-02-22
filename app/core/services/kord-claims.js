import { Swarm } from 'core/services'
import { kordId } from 'core/util'

/**
 * Fetch profile claims data from Swarm
 *
 * @param  {Array}  claims Set of KORD claims
 * @return {Object}        Resolved profile claims data
 */
export const fetchProfileClaims = claims => {
  // filter profile claims from the claims set
  const profileClaims = kordId.getProfileClaimsFromKordIdentityClaims(claims)

  // fetch profile claim data from Swarm using the raw claim hash
  const promises = profileClaims.map(({ claim }) => Swarm.download(claim))

  // return profile claims data indexed by Swarm hash
  return Promise.all(promises).then(values => {
    return values
      .map((v, i) => ({
        [`${profileClaims[i].claim}`]: new TextDecoder('utf-8').decode(v),
      }))
      .reduce((o, v) => Object.assign({}, o, v), {})
  })
}
