import React from 'react'
import PropTypes from 'prop-types'

function ListRow({ date, progress, id, onRemove }) {

  return (
    <tr>
      <td>
        {new Date(date).toDateString()}
      </td>
      <td>
        {progress}
      </td>
      <td>
        <button onClick={onRemove} data-id={id}>&#11199;</button>
      </td>
    </tr>
  )
}

ListRow.propTypes = {
  date: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default ListRow
