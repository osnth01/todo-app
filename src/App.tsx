import * as React from 'react'
import { Component } from 'react'
import TodoList from './TodoList'
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
        <TodoList todos={this.state.todos} />
      </>
    )
  }
}

export default App
