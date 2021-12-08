import {DeleteTodoAction, FetchTodosAction} from "./todos";

export enum ActionsType {
    fetchTodos,
    deleteTodo
}

export type Action = FetchTodosAction | DeleteTodoAction;