import React from 'react'
import PropTypes from 'prop-types'
import styles from './ColorTable.module.css'

function ColorTable(props) {
  return (
    <div className="row">
      <div className="row">
        <div className="col">
          <input className={styles.input} type="text" onChange={props.onChangeHandler} defaultValue={props.hex}/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input className={styles.input} type="text" name="" value={props.rgb} disabled />
        </div>
      </div>
    </div>
  )
}

ColorTable.propTypes = {}

export default ColorTable
