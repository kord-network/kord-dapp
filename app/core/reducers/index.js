import { foundReducer } from 'found'
import { combineReducers } from 'redux-immutablejs'

import * as Claims from 'domains/claims'
import * as Identity from 'domains/identity'
import * as MarketPlace from 'domains/marketplace'
import * as UI from 'domains/ui'

export default combineReducers({
  found: foundReducer,
  [Claims.name]: Claims.reducer,
  [Identity.name]: Identity.reducer,
  [MarketPlace.name]: MarketPlace.reducer,
  [UI.name]: UI.reducer,
})
