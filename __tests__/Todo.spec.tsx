import * as React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import Todo from '../src/Todo'
import TodoType from '../src/types/Todo'

const setup = (todo: TodoType) => {
  const props = {
    todo
  }

  const renderer = createRenderer()

  renderer.render(
    <Todo {...props} />
  )

  let output = renderer.getRenderOutput()

  return {
    props,
    output
  }
}

describe('components', () => {
 describe('Todo', () => {
   it('should say "Practice React"', () => {
     const todo: TodoType = {
       id: 1,
       todo: "Practice React"
     }
     const { output } = setup(todo)

     expect(output.props.children).toBe(todo.todo)
   })
 })
})
