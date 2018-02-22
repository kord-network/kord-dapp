import { foundReducer } from 'found'
import { combineReducers } from 'redux-immutablejs'

import * as MarketPlace from 'domains/marketplace'
import * as Profile from 'domains/profile'
import * as UI from 'domains/ui'

export default combineReducers({
  found: foundReducer,
  [MarketPlace.name]: MarketPlace.reducer,
  [Profile.name]: Profile.reducer,
  [UI.name]: UI.reducer,
})
