export const {
  APP_URL,
  BASE_NAME,
  KORD_NETWORK_GRAPHQL_ENDPOINT,
  NODE_ENV,
  SENTRY_DATA_SOURCE_NAME,
  SWARM_HOST,
} = process.env

export const CREDENTIALS = NODE_ENV === 'production' ? 'include' : null

export const PROFILE_CLAIM_SUB_PROPERTY = {
  image: 'image',
  name: 'name',
}

// export const PROFILE_IMAGE_DEFAULT = 'img/default-profile.png'

export const STATE_KEY = '@KORD:store'
