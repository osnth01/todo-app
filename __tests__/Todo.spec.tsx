import * as React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import Todo from '../src/Todo'
import TodoType from '../src/types/Todo'

const setup = (todo: TodoType) => {
  const props = {
    todo,
    onClick: jest.fn()
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
       todo: 'Practice React',
       completed: false
     }
     const { output } = setup(todo)

     expect(output.props.children).toBe(todo.todo)
   })

   it('should have a strike-through when completed', () => {
     const todo: TodoType = {
       id: 1,
       todo: 'Practice React',
       completed: true
     }

     const { output } = setup(todo)
     expect(output.props.className).toBe('todo completed')
   })
 })
})
