import { fromJS } from 'immutable'
import { createReducer } from 'redux-immutablejs'

import * as actions from './actionTypes'
import * as model from './model'

export const createAccount = account => model.accountFactory(account)

export const initialState = {
  account: null,
  encryptedKeystores: null,
  graph: null,
  isNewUser: false,
  oAuthClaimMessage: null,
  persistDecryptedKeystore: false,
}

export default createReducer(fromJS(initialState), {
  [actions.CLEAR_SESSION]: state => state.merge(fromJS(initialState)),

  [actions.LOCK_ACCOUNT]: (state, action) => state.mergeDeep(action.payload),

  [actions.SET_IS_NEW_USER]: (state, action) => state.merge(action.payload),

  [actions.SET_OAUTH_CLAIM_MESSAGE]: (state, action) =>
    state.merge(action.payload),

  [actions.UNLOCK_ACCOUNT]: (state, action) =>
    state.mergeDeep({
      account: createAccount(action.payload.account),
      encryptedKeystores: {
        [action.payload.account.address]: action.payload.keystore,
      },
      persistDecryptedKeystore: action.payload.persistDecryptedKeystore,
    }),
})
