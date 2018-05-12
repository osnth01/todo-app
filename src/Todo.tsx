import * as React from 'react'
import { SFC } from 'react'
import TodoType from './types/Todo'

type TodoProp = {
  todo: TodoType
}
const Todo: SFC<TodoProp> = ({todo}) => <div>{todo.todo}</div>

export default Todo
