import { identityClaims } from 'kord.js'

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
