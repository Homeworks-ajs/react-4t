import React from 'react'
import PropTypes from 'prop-types'
import styles from './ColorTable.module.css'

function ColorTable({onChangeHandler, rgb, hex}) {
  return (
    <div className="row">
      <div className="row">
        <div className="col">
          <input className={styles.input} type="text" onChange={onChangeHandler} defaultValue={hex} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input className={styles.input} type="text" value={rgb} disabled />
        </div>
      </div>
    </div>
  )
}

ColorTable.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  rgb: PropTypes.string.isRequired,
  hex: PropTypes.string
}

export default ColorTable
