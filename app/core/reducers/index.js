import { foundReducer } from 'found'
import { combineReducers } from 'redux-immutablejs'

import * as Claims from 'domains/claims'
import * as UI from 'domains/ui'

export default combineReducers({
  found: foundReducer,
  [Claims.name]: Claims.reducer,
  [UI.name]: UI.reducer,
})
