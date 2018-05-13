import * as React from 'react'
import {  } from 'react'
import { Component, MouseEvent, SFC } from 'react'

type TodoInputProps = {
  onClick(e: MouseEvent<HTMLElement>): void
}

const initialState = { newTodo: '' }
type TodoInputState = Readonly<typeof initialState>

class TodoInput extends Component<TodoInputProps, TodoInputState> {
  readonly state: TodoInputState = initialState

  render() {
    const { onClick } = this.props
    return (
      <div>
        <input type="text" value={this.state.newTodo} />
        <button onClick={onClick}>
          Submit
        </button>
      </div>
    )
  }
}

export default TodoInput