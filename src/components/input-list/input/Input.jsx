import React from 'react'
import PropTypes from 'prop-types'

function Input({labelText, type}) {
  return (
    <>
      <label htmlFor={type}>{labelText}</label>
      <input type={type} id={type} required />
    </>
  )
}

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default Input
