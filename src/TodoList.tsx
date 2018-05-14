import * as React from 'react'
import { SFC } from 'react'
import Todo from './Todo'
import TodoType from './types/Todo'

type TodoListProp = {
  todos: TodoType[],
  onTodoClick(todoId: number): void
}
const TodoList: SFC<TodoListProp> = ({todos, onTodoClick}) => (
  <div>
    {
      todos.map(todo => <Todo key={todo.id} todo={todo} onClick={onTodoClick}/>)
    }
  </div>
)

export default TodoList
