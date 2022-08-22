import React from 'react'
import PropTypes from 'prop-types'
import Input from './input/Input'

function InputList({ onAppend }) {
  return (
    <form id='form'>
      <div className="row">
        <div className="col">
          <Input type={"date"} labelText={"Дата:"}/>
        </div>
        <div className="col">
          <Input type={"number"} labelText={"Пройдено км:"}/>
        </div>
        <div className="col">
          <button type="button" className="btn btn-primary" form='form' onClick={onAppend}>Добавить</button>
        </div>
      </div>
    </form>
  )
}

InputList.propTypes = {
  onAppend: PropTypes.func.isRequired
}

export default InputList
