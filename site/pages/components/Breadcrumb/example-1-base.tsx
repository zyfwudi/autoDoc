/**
 * cn - 基本用法
 *    -- 组件调用通过 json 数据配置
 * en - Base
 *    -- The basic usage.
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, Message, TYPE } from 'shineout'

type BreadcrumbData = TYPE.Breadcrumb.Data

type BreadcrumbProps<data> = TYPE.Breadcrumb.Props<data>

const data: BreadcrumbProps<BreadcrumbData>['data'] = [
  [{ title: 'Home', url: '#home' }, { title: 'aaa', url: '#aaa' }, { title: 'bbb', url: '#bbb' }],
  { title: <Link to="/components/Button">Button</Link> },
  { title: 'Self', onClick: () => Message.show('Clicked self') },
]
const App: React.FC = () => <Breadcrumb data={data} />

export default App
