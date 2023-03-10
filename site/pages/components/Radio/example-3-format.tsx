/**
 * cn - 复杂数据
 *    -- 复杂的数据可以使用 format 处理 value
 * en - Complex data
 *    -- Complex data can use format to process value.
 */
import React from 'react'
import { Radio } from 'shineout'

interface RadioGroupItem {
  id: number
  color: string
}
const data: RadioGroupItem[] = [
  { id: 1, color: 'red' },
  { id: 2, color: 'orange' },
  { id: 3, color: 'yellow' },
  { id: 4, color: 'green' },
  { id: 5, color: 'cyan' },
  { id: 6, color: 'blue' },
  { id: 7, color: 'violet' },
]

const App: React.FC = () => (
  <Radio.Group keygen="id" data={data} format="color" defaultValue="blue" renderItem="color" />
)

export default App
