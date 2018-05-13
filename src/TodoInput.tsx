import * as React from 'react'
import { Component, MouseEvent, ChangeEvent } from 'react'

type TodoInputProps = {
  onClick(newTodo: string): void
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
          onChange={this.onChange.bind(this)} />
        <button onClick={this.onButtonClick.bind(this)}>
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

  private onButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (this.state.newTodo) {
      this.props.onClick(this.state.newTodo)
      this.setState({
        newTodo: ''
      })
    }
  }
}

export default TodoInput