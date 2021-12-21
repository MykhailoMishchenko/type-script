import {combineReducers} from "redux";
import {todoReducer} from "./todo/todoReducer";

export const rootReducer = combineReducers({
    todo: todoReducer
});

export type StoreType = ReturnType<typeof rootReducer>;
