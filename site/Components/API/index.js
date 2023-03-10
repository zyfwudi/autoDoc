import React from 'react'
import locate from 'doc/locate'

const APP = props => {
  const { title, properties, cn, en } = props
  return (
    <>
      <h3 id={`api-${title}`}>{title}</h3>
      {cn ? (
        <p style={{ whiteSpace: 'pre-wrap', margin: '14px 0 14px 14px', lineHeight: '1.5' }}>{locate(cn, en)}</p>
      ) : null}
      <div style={{ overflow: 'auto' }}>
        <table className="doc-api-table">
          <thead>
            <tr>
              <th>{locate('属性', 'Property')}</th>
              <th>{locate('类型', 'Type')}</th>
              <th>{locate('默认值', 'Default')}</th>
              <th>{locate('说明', 'Description')}</th>
              <th>{locate('版本', 'Version')}</th>
            </tr>
          </thead>
          <tbody>
            {properties
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(({ name, tag, type } = {}) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td>{type}</td>
                  <td>{tag.default || '-'}</td>
                  <td>{locate(tag.cn, tag.en)}</td>
                  <td>{tag.version || '-'}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default APP
