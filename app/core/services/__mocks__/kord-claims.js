import { kordId } from 'core/util'

export const fetchProfileClaims = claims => {
  const profileClaims = kordId.getProfileClaimsFromKordIdentityClaims(claims)

  return profileClaims
    .map((v, i) => ({
      [`${profileClaims[i].claim}`]: v,
    }))
    .reduce((o, v) => Object.assign({}, o, v), {})
}
