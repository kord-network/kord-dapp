import { foundReducer } from 'found'
import { combineReducers } from 'redux-immutablejs'

import * as UI from 'domains/ui'

export default combineReducers({
  found: foundReducer,
  [UI.name]: UI.reducer,
})
