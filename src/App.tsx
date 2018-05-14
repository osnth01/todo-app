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
      todo: 'Learn React',
      completed: false
    },
    {
      id: 2,
      todo: 'Exercise',
      completed: false
    }
  ]
}

class App extends Component<object, AppState> {
  readonly state: AppState = initialState

  render() {
    return (
      <>
        <TodoInput onSubmit={this.onSubmit} />
        <TodoList
          todos={this.state.todos}
          onTodoClick={this.onTodoClick}
        />
      </>
    )
  }

  private onSubmit = (newTodo: string) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos.length + 1,
          todo: newTodo,
          completed: false
        }
      ]
    })
  }

  private onTodoClick = (todoId: number) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        return todo.id === todoId ?
          {
            ...todo,
            completed: !todo.completed
          } :
          todo
      })
    })
  }
}

export default App
