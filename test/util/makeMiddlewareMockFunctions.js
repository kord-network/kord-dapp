/**
 * Construct mock functions for testing middleware
 *
 * @param  {Function} middleware Redux middleware to test
 * @return {Object}
 */
const makeMiddlewareMockFunctions = middleware => {
  // mock Redux store functions
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  }

  // mock middleware `next` function
  const next = jest.fn()

  // mock the middleware function itself
  const invoke = action => middleware(store)(next)(action)

  return { invoke, next, store }
}

export default makeMiddlewareMockFunctions
