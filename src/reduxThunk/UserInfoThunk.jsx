import React from "react";
import { useDispatch , useSelector } from "react-redux";
import reducer from "./reducer";
import {fetchTodos} from './actions'
const UserInfoThunk = () => {
// Simplest example for implementation

const dispatch = useDispatch()
const selector = useSelector((state) => state.apiReducer.apiResponse)
console.log(selector , 'selector')
const handleSubmit = () => {
    dispatch(fetchTodos())
}
return(
    <>
    Welcome to Redux Thunk ...!!

    <div>
        <button onClick={() => handleSubmit()}>
            Get User Details
        </button>
    </div>
    <div>
        userDetails :
        {/* mapping logic */}
    </div>
    </>
)
}

export default UserInfoThunk