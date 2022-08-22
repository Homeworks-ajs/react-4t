import React from 'react'
import PropTypes from 'prop-types'
import ListRow from './list-row/ListRow'

function ShowList({ list, onRemove }) {
  return (
    <table className='table'>
      <thead>
        <tr>
          <td>Дата</td>
          <td>Всего пройдено</td>
          <td>Действие</td>
        </tr>
      </thead>
      <tbody>
        {list.map(el => <ListRow onRemove={onRemove} key={el.id} {...el} />)}
      </tbody>
    </table>
  )
}

ShowList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
  })),
  onRemove: PropTypes.func.isRequired
}

export default ShowList
