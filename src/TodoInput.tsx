import * as React from 'react'
import { MouseEvent, SFC } from 'react'

type TodoInputType = {
  onClick(e: MouseEvent<HTMLElement>): void
}
const TodoInput: SFC<TodoInputType> = ({ onClick: handleClick }) => (
  <div>
    <input type="text"></input>
    <button onClick={handleClick}>
      Submit
    </button>
  </div>
)

export default TodoInput