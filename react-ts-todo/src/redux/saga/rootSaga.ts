import {all, fork} from "redux-saga/effects";
import {todoWatcher} from "./todo";

export function* rootSaga () {
    yield all([fork(todoWatcher)]);
};