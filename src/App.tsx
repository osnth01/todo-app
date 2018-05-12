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
        <TodoInput onClick={this.onClick} />
        <TodoList todos={this.state.todos} />
      </>
    )
  }

  private onClick = () => function() {}
}

export default App
