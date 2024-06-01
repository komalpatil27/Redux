# Getting Started with Create React App

This project has below examples:
Redux
Redux toolkit
Redux thunk 
Redux saga


## Redux

- action : 
    Action is a plain js object which has type field.
    An action as an event that describes something that happened in the application.
    A typical action object might look like this:

    ```js
    const addTodoAction = {
    type: 'todos/todoAdded',
    payload: 'Buy milk'
    }
    ```

- Reducers :
    A reducer is a function that receives the current state and an action object, 
    decides how to update the state if necessary, 
    and returns the new state: (state, action) => newState.
    ```js
        const initialState = { value: 0 }
        function counterReducer(state = initialState, action) {
        // Check to see if the reducer cares about this action
        if (action.type === 'counter/incremented') {
            // If so, make a copy of `state`
            return {
            ...state,
            // and update the copy with the new value
            value: state.value + 1
            }
        }
        // otherwise return the existing state unchanged
        return state
        }```

- Store :
    Redux application state lives in an object called the store .


    ```js
    import { configureStore } from '@reduxjs/toolkit'

    const store = configureStore({ reducer: counterReducer })

    console.log(store.getState())
    // {value: 0}```

- Redux Application Data Flow

State describes the condition of the app at a specific point in time
The UI is rendered based on that state
When something happens (such as a user clicking a button), the state is updated based on what occurred
The UI re-renders based on the new state