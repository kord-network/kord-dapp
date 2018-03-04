/**
 * Check that an action object key is a permitted standard key
 *
 * @param  {String}  key Flux action object key
 * @return {Boolean}
 */
const isValidKey = key => ['error', 'meta', 'promise', 'type'].includes(key)

/**
 * Check that an action conforms to the standard async action object
 *
 * @param  {Object}  action Flux action object
 * @return {Boolean}
 */
const isAsyncAction = action => {
  return (
    typeof action === 'object' &&
    typeof action.promise === 'object' &&
    typeof action.type === 'string' &&
    Object.keys(action).every(isValidKey)
  )
}

export default isAsyncAction
