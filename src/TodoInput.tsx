import * as React from 'react'
import { Component, MouseEvent, ChangeEvent } from 'react'

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
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.onChange.bind(this)}/>
        <button onClick={onClick}>
          Submit
        </button>
      </div>
    )
  }

  private onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTodo: e.target.value
    })
  }
}

export default TodoInput