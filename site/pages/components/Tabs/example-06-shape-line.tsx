/**
 * cn - 样式
 *    -- 设置 shape 为 'line'，标签显示为线条
 * en - Shape (line)
 *    -- The line type tabs.
 */
import React from 'react'
import { Tabs } from 'shineout'
import lorem from 'doc/utils/faker/lorem'

const panelStyle: React.CSSProperties = { padding: '12px 0' }

const App: React.FC = () => (
  <Tabs shape="line" defaultActive={1}>
    <Tabs.Panel style={panelStyle} tab="Home">
      {lorem(5)}
    </Tabs.Panel>

    <Tabs.Panel style={panelStyle} tab="Profile">
      {lorem(6)}
    </Tabs.Panel>

    <Tabs.Panel style={panelStyle} tab="Contact">
      {lorem(4)}
    </Tabs.Panel>
  </Tabs>
)

export default App
