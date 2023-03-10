/**
 * cn -
 *    -- 如果内置样式不满足需求，可以通过 background 和 border 自定义样式
 * en -
 *    -- Customize the style with background and border.
 */
import React from 'react'
import { Button, Popover } from 'shineout'

const style: React.CSSProperties = { width: 200, padding: 20, color: 'gold' }

const App: React.FC = () => (
  <Button>
    <Popover background="#555" border="gold" style={style}>
      Some text
    </Popover>
    Hover
  </Button>
)

export default App
