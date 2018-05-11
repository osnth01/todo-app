import * as React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import App from '../src/App'

const setup = () => {
  const renderer = createRenderer()
  renderer.render(<App />)
  const output = renderer.getRenderOutput()
  return output
}

describe('components', () => {
  describe('App', () => {
    it('should say "To Do"', () => {
      const output = setup()
      expect(output.props.children).toEqual('To Do')
    })
  })
})
