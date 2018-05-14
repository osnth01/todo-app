import * as React from 'react'
import { SFC, MouseEvent } from 'react'
import TodoType from './types/Todo'
import './Todo.css'

type TodoProp = {
  todo: TodoType
  onClick(id: number): void
}
const Todo: SFC<TodoProp> = ({todo, onClick}) => {
  let style = 'todo'
  if (todo.completed) {
    style += ' completed'
  }
  return (
    <div className={style} onClick={e => {
      onClick(todo.id)
    }}>
      {todo.todo}
    </div>
  )
}

export default Todo
