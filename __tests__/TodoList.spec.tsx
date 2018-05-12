import * as React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import TodoList from '../src/TodoList'
import TodoType from '../src/types/Todo'

const setup = (todos: TodoType[]) => {
  const props = todos

  const renderer = createRenderer()

  renderer.render(
    <TodoList todos={todos} />
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
          todo: 'Learn React'
        },
        {
          id: 2,
          todo: 'Exercise'
        }
      ]
      const { output } = setup(todos)

      expect(output.props.children.length).toBe(todos.length)
    })
  })
})