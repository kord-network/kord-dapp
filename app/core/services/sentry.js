import Raven from 'raven-js'

import { NODE_ENV, SENTRY_DATA_SOURCE_NAME } from 'core/constants'
import { isDevelopment } from 'core/util'

/**
 * Configure Sentry error tracking
 *
 * @example sentry.install() // => initializes Sentry
 *
 * @see https://docs.sentry.io/clients/javascript/config/
 *
 * @type {Object}
 */
const Sentry = Raven.config(SENTRY_DATA_SOURCE_NAME, {
  debug: isDevelopment,
  environment: NODE_ENV,
})

export default Sentry
