import React, { Component } from 'react'

class InputTodo extends Component {
    state = {
        title: ""
    }
    inputTodo = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.title)
        this.props.addToProps(this.state.title);
        this.setState({
            title: ""
        })
    }
    render() {
        
        return <div>
                <form onSubmit={this.handleSubmit} className="form-container">
                <input className="input-text" type="text" onChange={this.inputTodo} placeholder="Add todo..." name="title" value={this.state.title}/> 
                <input className="input-submit" type="submit" /> 
                </form>
                </div>
    }
}

export default InputTodo