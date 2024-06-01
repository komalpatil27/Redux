import React from "react";

const UserInfoThunk = () => {
// Simplest example for implementation


const handleSubmit = () => {

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