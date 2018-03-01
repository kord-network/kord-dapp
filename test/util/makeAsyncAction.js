import { KEY } from 'redux-pack'

/**
 * Construct an action for use with redux-pack
 *
 * @see https://github.com/lelandrichardson/redux-pack#testing
 *
 * @param  {String} lifecycle redux-pack lifecycle method type
 * @param  {Object} action    Flux Standard Action
 * @return {Object}
 */
const makeAsyncAction = (lifecycle, { meta = {}, payload, type }) => {
  return {
    meta: { ...meta, [KEY.LIFECYCLE]: lifecycle },
    payload,
    type,
  }
}

export default makeAsyncAction
