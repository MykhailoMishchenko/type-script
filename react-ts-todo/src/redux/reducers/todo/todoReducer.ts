import {TodoActions, TodoState} from "../../types/type";
import {FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS, FETCH_TODO_FAILURE} from "../../types/actionTypes";

const initialState: TodoState = {
    pending: false,
    todos: [],
    error: null
};

export const todoReducer = (state = initialState, action: TodoActions) => {
    switch (action.type) {
        case FETCH_TODO_REQUEST:
            return {
                ...state,
                pending: true
            };
        case FETCH_TODO_SUCCESS:
            return {
                ...state,
                pending: false,
                todos: action.payload.todos
            }
        case FETCH_TODO_FAILURE:
            return {
                ...state,
                pending: false,
                todos: [],
                error: action.payload.error
            }
        default:
            return state
    }
}