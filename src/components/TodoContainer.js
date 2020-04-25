import React, { Component } from 'react'
import TodoList from './TodoList'
import Header from './Header'
import InputTodo from './InputTodo'
import { v4 as uuidv4 } from "uuid";


class TodoContainer extends Component {
    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Wake Up",
                completed: true
            },
            {
                id: uuidv4(),
                title: "Pray",
                completed: true
            },
            {
                id: uuidv4(),
                title: "Eat",
                completed: true
            },
            {
                id: uuidv4(),
                title: "Study",
                completed: false
            }
        ]
    }
    handleDelete = (id) => {
        console.log("Delete: "+id)
        this.setState(
            {
            todos: [
                    ...this.state.todos.filter(
                        (todo)=> {
                            console.log(todo.id)
                        return id != todo.id
                        }
                        )
                    ]
            }
        )
    }
    handleChange = (id) => {
        console.log("handleChange Clicked: "+ id)
        this.setState({
            todos: this.state.todos.map(t => {
                if(id === t.id) {
                    t.completed = !t.completed;
                }
                return t;
            })
        })
    }
    addTodoItem = (item) => {
        const newTodo = {
            id: uuidv4(),
            title: item,
            completed: false
        };
        console.log(item)
        this.setState({
            todos: [...this.state.todos, newTodo]
        }) 
    }
    render() {
       
        return (
            <div className="container">
                <Header/>
                <InputTodo addToProps={this.addTodoItem}/>
                <TodoList handler={this.handleChange} todos={this.state.todos} deleteHandler={this.handleDelete}/>
                
            </div>
        )
    }
       
}

export default TodoContainer