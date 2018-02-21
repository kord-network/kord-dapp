import swarm from 'swarm-js'

import { SWARM_HOST } from 'core/constants'

/**
 * Init Swarm API
 *
 * @type {Object}
 */
const bzz = swarm.at(SWARM_HOST)

/**
 * Download data from Swarm
 *
 * @param  {String}  hash Swarm hash of data to download
 * @return {Promise}
 */
export const download = hash => {
  return bzz.download(hash)
}

/**
 * Upload data to Swarm
 *
 * @param  {(Array|Object|String)} data Data to upload: Uint8Array of binary
 *                                      data, raw string or directory object
 * @return {Promise}
 */
export const upload = data => {
  return bzz.upload(data)
}
