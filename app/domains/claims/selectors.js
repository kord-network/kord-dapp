import { identityClaims } from 'meta.js'
import { createSelector } from 'reselect'

import { selectors as Profile } from 'domains/profile'
import { name } from './constants'

/**
 * Select the entire domain from the store by `name`
 *
 * @param  {Object} state Redux store
 * @return {Object}       Domain state
 */
const getAll = state => state.get(name)

/**
 * Get all claims augmented with resolved profile claim data
 *
 * @return {Object}
 */
const getClaimsWithProfileData = createSelector(
  [getAll, Profile.profile],
  (claims, profile) => {
    const claimsWithProfileData = claims.map(graph =>
      graph.map(claim => {
        // check for profile claim
        if (identityClaims.isProfileClaim(claim.toObject())) {
          // replace claim hash with resolved claim data from `profile`
          const profileClaim = claim.set(
            'claim',
            profile.get(claim.get('claim'))
          )

          // return profile claim
          return profileClaim
        }

        // otherwise just return original claim
        return claim
      })
    )

    return claimsWithProfileData.toJS()
  }
)

export default {
  claims: getAll,
  claimsWithProfileData: getClaimsWithProfileData,
}
