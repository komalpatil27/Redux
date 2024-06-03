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

### Writing Thunks

- A thunk function is a function that accepts two arguments: the Redux store dispatch method, and the Redux store getState method. Thunk functions are not directly called by application code. Instead, they are passed to store.
- Thunks allow us to write additional Redux-related logic separate from a UI layer. This logic can include side effects, such as async requests or generating random values, as well as logic that requires dispatching multiple actions or access to the Redux store state.

    ```js
    const thunkFunction = (dispatch, getState) => {
    // logic here that can dispatch actions or read state
    }
    store.dispatch(thunkFunction)
    ```
    - A thunk action creator is a function that may have some arguments, and returns a new thunk function.
        ```js
        // fetchTodoById is the "thunk action creator"
        export function fetchTodoById(todoId) {
        // fetchTodoByIdThunk is the "thunk function"
        return async function fetchTodoByIdThunk(dispatch, getState) {
            const response = await client.get(`/fakeApi/todo/${todoId}`)
            dispatch(todosLoaded(response.todos))
        }
        }
        <!-- Writing thunks using arrow functions -->
        export const fetchTodoById = todoId => async dispatch => {
        const response = await client.get(`/fakeApi/todo/${todoId}`)
        dispatch(todosLoaded(response.todos))
        }
        
        ```
        - Redux middleware are all written as a series of 3 nested functions:

            - The outer function receives a "store API" object with {dispatch, getState}
            - The middle function receives the next middleware in the chain (or the actual store.dispatch method)
            - The inner function will be called with each action as it's passed through the middleware chain