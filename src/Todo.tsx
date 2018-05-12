import * as React from 'react'
import { SFC } from 'react'

type TodoProp = {
  todo: string
}
const Todo: SFC<TodoProp> = ({todo}) => <div>{todo}</div>

export default Todo
