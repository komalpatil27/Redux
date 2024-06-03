export const TODOS_LOADED = 'todos/todosLoaded';

export const fetchTodos = () => async (dispatch) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log('response' , data)
        dispatch({ type: TODOS_LOADED, payload: data });
    } catch (error) {
        console.error('Failed to fetch todos', error);
    }
};