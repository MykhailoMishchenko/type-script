import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getErrorSelector, getPendingSelector, getTodosSelector} from "./redux/selectors/todo";
import {fetchTodoRequest} from "./redux/actions/todoAction";

const App = () => {

    const dispatch = useDispatch();
    const pending = useSelector(getPendingSelector);
    const todos = useSelector(getTodosSelector);
    const error = useSelector(getErrorSelector);

    useEffect(() => {
        dispatch(fetchTodoRequest())
    }, [dispatch])

    return (
        <div style={{ padding: "15px" }}>
            {pending ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error</div>
            ) : (
                todos.map((todo, index) => (
                    <div style={{ marginBottom: "10px" }} key={todo.id}>
                        {++index}. {todo.title}
                    </div>
                ))
            )}
        </div>
    );
};

export default App;
