import {Todo, ActionsType, Action} from "../actions";

export const todosReducer = (state: Todo[] = [], action: Action) => {
    switch (action.type) {
        case ActionsType.fetchTodos:
            return action.payload
        case ActionsType.deleteTodo:
            return state.filter((todo: Todo) => todo.id !== action.payload)
        default:
            return state
    }
}