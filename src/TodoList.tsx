import * as React from 'react'
import { SFC } from 'react'
import Todo from './Todo'
import TodoType from './types/Todo'

type TodoListProp = {
  todos: TodoType[]
}
const TodoList: SFC<TodoListProp> = ({todos}) => (
  <div>
    {
      todos.map(todo => <Todo key={todo.id} todo={todo.todo} />)
    }
  </div>
)

export default TodoList
