import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'
// import { handle } from 'redux-pack'

// import * as actions from './actionTypes'

export const initialState = Immutable.fromJS({})

export default createReducer(initialState, {})
