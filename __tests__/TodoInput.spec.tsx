import * as React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import TodoInput from '../src/TodoInput'

const setup = () => {
  let props = {
    onSubmit: jest.fn()
  }
  const renderer = createRenderer()

  renderer.render(
    <TodoInput onSubmit={props.onSubmit}/>
  )

  let output = renderer.getRenderOutput()

  let [ input, button ] = output.props.children

  return {
    props,
    output,
    input,
    button
  }
}

describe('components', () => {
  describe('TodoInput', () => {
    it('should have an input field', () => {
      const { input } = setup()

      expect(input.type).toBe('input')
    })

    it('should have a submit button', () => {
      const { button } = setup()

      expect(button.type).toBe('button')
    })

    it('should trigger `onClick` when button is pressed', () => {
      const { button, props } = setup()

      button.props.onSubmit()
      expect(props.onSubmit).toHaveBeenCalled()
    })
  })
})
