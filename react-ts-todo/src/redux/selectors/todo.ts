import {createSelector} from "reselect"
import {StoreType} from "../reducers/rootReducer";

const getPending = (state: StoreType) => state.todo.pending;

const getTodos = (state: StoreType) => state.todo.todos;

const getError = (state: StoreType) => state.todo.error;

export const getTodosSelector = createSelector(getTodos, (todos) => todos);

export const getPendingSelector = createSelector(getPending, (pending) => pending);

export const getErrorSelector = createSelector(getError, (error) => error);