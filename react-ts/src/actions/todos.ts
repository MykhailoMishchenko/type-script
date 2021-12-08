import axios from "axios";
import {Dispatch} from "redux";
import {ActionsType} from "./types"; // тип для dispatch

export interface Todo {
    id: number,
    title: string,
    completed: boolean
}

export interface FetchTodosAction {
    type: ActionsType.fetchTodos;
    payload: Todo[]
}

export interface DeleteTodoAction {
    type: ActionsType.deleteTodo;
    payload: number
}

export const fetchTodos = () => async (dispatch: Dispatch) => {
    const res = await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos")

    dispatch<FetchTodosAction>({
        type: ActionsType.fetchTodos,
        payload: res.data
    })
}

export const deleteTodo = (id: number) => ({
    type: ActionsType.deleteTodo,
    payload: id
})