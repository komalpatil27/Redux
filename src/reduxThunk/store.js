import {createStore , applyMiddleware} from 'redux'
import reducer from './reducer'

import {thunk} from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))
const thunkStore = createStore(reducer, composedEnhancer)

export default thunkStore