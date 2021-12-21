import axios from "axios";
import {all, call, put, takeLatest} from "redux-saga/effects";

import {fetchTodoFailure, fetchTodoSuccess} from "../actions/todoAction";
import {FETCH_TODO_REQUEST} from "../types/actionTypes";
import {ITodo} from "../types/type";

const getTodos = () => axios.get<ITodo[]>("https://jsonplaceholder.typcode.com/todos");


function* todoWorker() {
    try {
        const response: { data?: any } = yield call(getTodos);
        yield put(
            fetchTodoSuccess({
                todos: response.data
            })
        );
    } catch (error: any) {
        yield put(
            fetchTodoFailure({
                error: error.message
            })
        );
    }
};

export function* todoWatcher() {
    yield all([takeLatest(FETCH_TODO_REQUEST, todoWorker)]);
};