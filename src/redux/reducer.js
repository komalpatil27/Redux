
// Reducer
import ActionTypes from "./ActionTypes"
const initialState = {
    city : '',
    userName : ''
}

const reducer = (state = initialState , action) => {
    console.log(action , 'action')
    switch (action.type){
    case ActionTypes.USER : {
        return {...state , userName : action.payload}
    }
    case ActionTypes.CITY : {
        return {...state , city : action.payload}
    }
    default : return state
}
}

// combined Reducer
export default reducer