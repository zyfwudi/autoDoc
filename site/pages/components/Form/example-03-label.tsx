/**
 * cn -
 *    -- labelAlign="top"
 * en -
 *    -- labelAlign="top"
 */
import React from 'react'
import { Form, Input } from 'shineout'

const App: React.FC = () => (
  <Form labelAlign="top" style={{ maxWidth: 300 }}>
    <Form.Item label="Email">
      <Input name="email" />
    </Form.Item>

    <Form.Item label="Password">
      <Input name="password" type="password" />
    </Form.Item>

    <Form.Submit>Submit</Form.Submit>
  </Form>
)

export default App
