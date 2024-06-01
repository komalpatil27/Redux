import { combineReducers } from "redux";

const initialState = {
    apiResponse : []    
}

const apiReducer = (state =  initialState, action) => {
    return state
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