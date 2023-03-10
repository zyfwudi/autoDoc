import React, { Component } from 'react'
import { cascaderClass } from './styles'
import Node from './Node'
import { getLocale } from '../locale'
import { CascaderListProps } from './Props'
import { getDirectionClass } from '../utils/classname'
import { KeygenResult } from '../@types/common'

const DefaultProps = {
  id: '',
  parentId: '',
  text: {},
}

class List<U, T extends any[]> extends Component<CascaderListProps<U, T>> {
  static defaultProps = DefaultProps

  constructor(props: CascaderListProps<U, T>) {
    super(props)

    this.state = {}
    this.getText = this.getText.bind(this)
  }

  getKey(data: U, index: number): KeygenResult {
    const { keygen, parentId } = this.props
    if (typeof keygen === 'function') return keygen(data, parentId)
    if (keygen && typeof keygen === 'string') {
      const key = data[keygen]
      if (typeof key === 'string' || typeof key === 'number') {
        return key
      }
      console.error('key must be number or string but get', key)
    }
    return parentId + (parentId ? ',' : '') + index
  }

  getText(key: string) {
    return (this.props.text || {})[key] || getLocale(key)
  }

  render() {
    const { data, ...other } = this.props
    if (!data || data.length === 0) return <span className={cascaderClass('no-data')}>{this.getText('noData')}</span>
    return (
      <div className={cascaderClass(getDirectionClass('list'))}>
        {data.map((d, i) => {
          const id = this.getKey(d, i)
          return <Node {...other} key={id} active={other.id === id} id={id} data={d} />
        })}
      </div>
    )
  }
}

export default List
