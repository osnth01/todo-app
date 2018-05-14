import * as React from 'react'
import { Component, FormEvent, ChangeEvent } from 'react'

type TodoInputProps = {
  onSubmit(newTodo: string): void
}

const initialState = { newTodo: '' }
type TodoInputState = Readonly<typeof initialState>

class TodoInput extends Component<TodoInputProps, TodoInputState> {
  readonly state: TodoInputState = initialState

  render() {
    const { onSubmit } = this.props
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.onChange.bind(this)} />
        <button type="submit">
          Submit
        </button>
      </form>
    )
  }

  private onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTodo: e.target.value
    })
  }

  private onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (this.state.newTodo) {
      this.props.onSubmit(this.state.newTodo)
      this.setState({
        newTodo: ''
      })
    }
  }
}

export default TodoInput