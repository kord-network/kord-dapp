import { LIFECYCLE } from 'redux-pack'

import middleware from 'core/middleware/ui'
import { actionTypes } from 'domains/ui'
import { makeAsyncAction, makeMiddlewareMockFunctions } from '~/util'

describe('core/middleware/ui', () => {
  let invoke, next, store

  beforeAll(() => {
    const mocks = makeMiddlewareMockFunctions(middleware)

    invoke = mocks.invoke
    next = mocks.next
    store = mocks.store
  })

  it('Should pass through unobserved action', () => {
    const action = { type: 'TEST_UNOBS_ACTION' }

    invoke(action)

    expect(next).toHaveBeenCalledWith(action)
  })

  it('Should dispatch ui/UPDATE action on async action failure', () => {
    const action = makeAsyncAction(LIFECYCLE.FAILURE, {
      payload: { errors: [] },
      type: 'TEST_ASYNC_ACTION',
    })

    invoke(action)

    expect(store.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        payload: { error: [], isRequesting: false },
        type: actionTypes.UPDATE,
      })
    )
    expect(next).toHaveBeenCalledWith(action)
  })

  it('Should dispatch ui/UPDATE action on async action start', () => {
    const action = makeAsyncAction(LIFECYCLE.START, {
      payload: {},
      type: 'TEST_ASYNC_ACTION',
    })

    invoke(action)

    expect(store.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        payload: { error: null, isRequesting: true },
        type: actionTypes.UPDATE,
      })
    )
    expect(next).toHaveBeenCalledWith(action)
  })

  it('Should dispatch ui/UPDATE action on async action success', () => {
    const action = makeAsyncAction(LIFECYCLE.SUCCESS, {
      payload: {},
      type: 'TEST_ASYNC_ACTION',
    })

    invoke(action)

    expect(store.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        payload: { isRequesting: false },
        type: actionTypes.UPDATE,
      })
    )
    expect(next).toHaveBeenCalledWith(action)
  })
})
