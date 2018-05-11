import * as React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import Todo from '../src/Todo'

const setup = (todo: string) => {
  const props = {
    todo
  }

  const renderer = createRenderer()

  renderer.render(
    <Todo text={props.todo} />
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
     const todo = "Practice React"
     const { output } = setup(todo)

     expect(output.props.children).toBe(todo)
   })
 })
})
