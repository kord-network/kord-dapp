import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'

import * as actions from './actionTypes'

export const initialState = Immutable.fromJS({})

export default createReducer(initialState, {
  [actions.ADD_PROFILE_CLAIMS]: (state, action) => state.merge(action.payload),
})
