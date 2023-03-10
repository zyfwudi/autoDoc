/**
 * cn -
 *    -- 示例：不带分页的合并行/列
 * en -
 *    -- Example: Merged rows/columns without pagination.
 */
import React from 'react'
import { Table, TYPE } from 'shineout'
import { fetchSync } from 'doc/data/user'

interface TableRowData {
  id: number
  time: string
  start: string
  height: number
  salary: number
  office: string
  country: string
  office5: string
  position: string
  lastName: string
  firstName: string
}

type TableColumnItem = TYPE.Table.ColumnItem<TableRowData>

const data: TableRowData[] = fetchSync(10000)

const columns: TableColumnItem[] = [
  {
    title: 'id',
    render: 'id',
    width: 70,
    sorter: order => (a, b) => {
      if (order === 'asc') return a.id - b.id
      return b.id - a.id
    },
  },
  {
    title: 'First Name',
    group: 'Name',
    render: 'firstName',
    rowSpan: (a, b) => a.firstName === b.firstName,
    sorter: order => (a, b) => {
      if (order === 'asc') return a.firstName.localeCompare(b.firstName)
      return b.firstName.localeCompare(a.firstName)
    },
  },
  { title: 'Last Name', group: 'Name', render: 'lastName' },
  {
    title: 'Start Date',
    width: 120,
    render: 'start',
    rowSpan: (a, b) => a.start === b.start,
    colSpan: d => {
      const hour = parseInt(d.time.slice(0, 2), 10)
      if (hour > 21 || hour < 9) return 2
      return 1
    },
    sorter: order => (a, b) => {
      if (order === 'asc') return a.start.localeCompare(b.start)
      return b.start.localeCompare(a.start)
    },
  },
  { title: 'Time', render: 'time' },
  { title: 'Office', render: 'office5', rowSpan: true },
]

const App: React.FC = () => (
  <Table bordered data={data} keygen="id" fixed="y" columns={columns} style={{ height: 650 }} />
)

export default App
