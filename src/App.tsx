import * as React from 'react'
import { Component } from 'react'
import TodoList from './TodoList'
import TodoInput from './TodoInput'
import TodoType from './types/Todo'

type AppState = {
  readonly todos: TodoType[]
}

const initialState: AppState = {
  todos: [
    {
      id: 1,
      todo: 'Learn React'
    },
    {
      id: 2,
      todo: 'Exercise'
    }
  ]
}

class App extends Component<object, AppState> {
  readonly state: AppState = initialState

  render() {
    return (
      <>
        <TodoInput onSubmit={this.onSubmit} />
        <TodoList todos={this.state.todos} />
      </>
    )
  }

  private onSubmit = (newTodo: string) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos.length + 1,
          todo: newTodo
        }
      ]
    })
  }
}

export default App
