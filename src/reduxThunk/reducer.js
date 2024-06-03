import { combineReducers } from "redux";
import {TODOS_LOADED} from './actions'
const initialState = {
    apiResponse : []    
}

const apiReducer = (state =  initialState, action) => {
    switch(action.type){
        case TODOS_LOADED: {
            return {...state, apiResponse : [action.payload]}
        }
        default : return state
    }
   
}

const initailId = 1
const idReducer = (state = initailId , action) => {
    return state
}

const reducer = combineReducers({
    apiReducer,
    idReducer
})
export default reducer