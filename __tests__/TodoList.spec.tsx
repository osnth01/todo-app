import * as React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import TodoList from '../src/TodoList'
import TodoType from '../src/types/Todo'

const setup = (todos: TodoType[]) => {
  const props = {
    todos,
    onTodoClick: jest.fn()
  }

  const renderer = createRenderer()

  renderer.render(
    <TodoList {...props} />
  )

  let output = renderer.getRenderOutput()

  return {
    props,
    output
  }
}

describe('components', () => {
  describe('TodoList', () => {
    it ('should render a list of todos', () => {
      const todos: TodoType[] = [
        {
          id: 1,
          todo: 'Learn React',
          completed: false
        },
        {
          id: 2,
          todo: 'Exercise',
          completed: false
        }
      ]
      const { output } = setup(todos)

      expect(output.props.children.length).toBe(todos.length)
    })
  })
})