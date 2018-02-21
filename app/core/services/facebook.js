/**
 * Call the Facebook JS SDK `login` method
 *
 * @see https://developers.facebook.com/docs/facebook-login/web#logindialog
 * @see https://developers.facebook.com/docs/facebook-login/permissions
 *
 * @param  {String} [scope='public_profile'] Optional permissions scope request
 * @return {Object}                          SDK method response
 */
export const login = (scope = 'public_profile') => {
  return new Promise((resolve, reject) => {
    return window.FB.login(
      response => {
        if (response.status === 'connected') {
          return resolve(response)
        } else {
          return reject(response)
        }
      },
      { scope }
    )
  })
}
