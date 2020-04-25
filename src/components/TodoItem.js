import React, { Component } from 'react'

class TodoItem extends Component {
    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#d35e0f",
            opacity: 0.4,
            textDecoration: "line-through",
          }
        const {id, title, completed } = this.props.todo;
        return <li className="todo-item" key={id}> 
                <input onChange={() => this.props.handler(id)} 
                    type="checkbox" checked={completed}/> 
                <button onClick={() => this.props.deleteHandler(id)}>Delete</button>
                <span style={completed ? completedStyle : null}>      
                    {title}
                </span>

                </li>
    }
}

export default TodoItem