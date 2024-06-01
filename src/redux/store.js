import {createStore } from 'redux'
import reducer from './reducer'
const counterStore = createStore(reducer)
export default counterStore