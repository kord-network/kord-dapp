/**
 * Fetch API GET request
 *
 * @param  {String}  route Request URL
 * @return {Promise}       Fetch request
 */
export const get = route => {
  return fetch(route, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })
}

/**
 * Fetch API POST request
 *
 * @param  {Object}  data      Request body
 * @param  {String}  route     Request URL
 * @param  {Object}  [options] Custom options
 * @return {Promise}           Fetch request
 */
export const post = (data, route, options = {}) => {
  return fetch(route, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    ...options,
  })
}
