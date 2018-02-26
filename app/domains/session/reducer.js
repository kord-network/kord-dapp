import { fromJS } from 'immutable'
import { createReducer } from 'redux-immutablejs'
import { handle } from 'redux-pack'

import * as actions from './actionTypes'
import * as model from './model'

const createAccount = account => model.accountFactory(account)

export const initialState = {
  account: null,
  graph: null,
  isNewUser: false,
  oAuthClaimMessage: null,
}

export default createReducer(fromJS(initialState), {
  [actions.LOGIN]: (state, action) =>
    handle(state, action, {
      success: prevState =>
        prevState.merge({
          account: createAccount(action.meta.account),
          graph: action.meta.graph,
          isNewUser: action.meta.isNewUser,
        }),
    }),

  [actions.LOGOUT]: state => state.merge(initialState),

  [actions.SET_IS_NEW_USER]: (state, action) => state.merge(action.payload),

  [actions.SET_OAUTH_CLAIM_MESSAGE]: (state, action) =>
    state.merge(action.payload),
})
