import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

import * as actions from './actionTypes'

export const initialState = Immutable.fromJS({
  error: null,
  isRequesting: false,
})

export default createReducer(initialState, {
  [actions.RESET]: state => state.merge(initialState.toJS()),

  [actions.UPDATE]: (state, action) => state.merge(action.payload),
})
