import { identityClaims } from 'meta.js'
import { META_ID_USERNAME_SUFFIX as KORD_GRAPH_URI_SCHEME } from '@meta.js/shared'

/**
 * Get the path from a KORD graph URI
 *
 * @example getPathFromGraphURI('luke.kord') // => 'luke'
 *
 * @param  {String} graphURI KORD graph path
 * @return {String}          Path extracted from graph URI
 */
export const getPathFromGraphURI = graphURI =>
  graphURI.replace(new RegExp(KORD_GRAPH_URI_SCHEME, 'i'), '')

/**
 * Filter all profile claims from a set of KORD Identity Claim objects
 *
 * @param  {Array} claims Set of KORD Identity Claim objects
 * @return {Array}        Filtered profile claims
 */
export const getProfileClaimsFromKordIdentityClaims = claims => {
  return claims.filter(claim => identityClaims.isProfileClaim(claim))
}

/**
 * Convert array of profile claims into object keyed by claim sub-property
 *
 * @param  {Array}  claims Set of KORD Identity Profile Claim objects
 * @return {Object}        Profile claims object keyed by claim sub-property
 */
export const getProfileClaimsKeyedBySubProperty = claims => {
  return claims.reduce(
    (obj, claim) =>
      Object.assign({}, obj, {
        [identityClaims.getProfileClaimSubPropertyFromProperty(
          claim.property
        )]: claim,
      }),
    {}
  )
}
