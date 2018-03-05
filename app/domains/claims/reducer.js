import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'
import { handle } from 'redux-pack'

import * as actions from './actionTypes'
import * as model from './model'

const createClaim = claims =>
  claims.map(claim => model.claimFactory(claim)).reduce(
    (obj, claim) =>
      Object.assign({}, obj, {
        [claim.id]: claim,
      }),
    {}
  )

export const initialState = Immutable.fromJS({})

export default createReducer(initialState, {
  [actions.CREATE_CLAIM]: (state, action) =>
    handle(state, action, {
      success: prevState =>
        prevState.mergeIn(
          [action.meta.graph],
          createClaim([action.payload.data.createClaim])
        ),
    }),

  [actions.READ_CLAIMS]: (state, action) =>
    handle(state, action, {
      success: prevState =>
        prevState.mergeIn(
          [action.meta.graph],
          createClaim(action.payload.data.graph.claim)
        ),
    }),
})
