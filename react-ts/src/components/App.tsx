import React from 'react';
import {connect} from "react-redux";
import {fetchTodos, Todo, deleteTodo} from "../actions";
import {StoreState} from "../reducers";

interface AppProps {
    todos: Todo[],
    fetchTodos: Function;
    deleteTodo: Function;
}

interface AppState {
    fetching: boolean
}

class _App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);

        this.state = {fetching: false}
    }

    componentDidUpdate(prevProps: AppProps): void {
        if (!prevProps.todos.length && this.props.todos.length) {
            this.setState({fetching: false})
        }
    }

    onFetch = () => {
        this.props.fetchTodos();
        this.setState({fetching: true})
    }

    onDelete = (id: number): void => {
        this.props.deleteTodo(id)
    }

    renderTodos(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return <div onClick={() => this.onDelete(todo.id)} key={todo.id}>
                <div>{todo.title}</div>
            </div>
        })
    }

    render() {
        return (
            <>
                <button onClick={this.onFetch}>fetch</button>
                {this.state.fetching ? "Loading" : null}
                {this.renderTodos()}

            </>
        )
    }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => ({
    todos: state.todos
})

export const App = connect(mapStateToProps, {
    fetchTodos, deleteTodo
})(_App)
