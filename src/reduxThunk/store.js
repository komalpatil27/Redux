import {createStore} from 'redux'
import reducer from './reducer'

const thunkStore = createStore(reducer)

export default thunkStore