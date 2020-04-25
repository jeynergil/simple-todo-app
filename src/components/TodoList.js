import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {

    render() {
        const todos = this.props.todos;
        const handler = this.props.handler;
        const deleteHandler = this.props.deleteHandler
        return (
            <ul>
            {
                todos.map(t => <TodoItem key={t.id} todo={t} handler={handler} deleteHandler={deleteHandler}/>)
            }
            </ul>
        )
    }
}

export default TodoList