import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ColorTable from '../color-table/ColorTable'
import { randColor } from '../randomizer';
import { hex } from 'color-convert';
import styles from './ColorBody.module.css';

function ColorBody(props) {
  const bgcStyle = {
    wrapper: {
      backgroundColor: ""
    }
  } 

  const defaulRandHexColor = randColor();
  
  bgcStyle.wrapper.backgroundColor = defaulRandHexColor;

  const [HEXColor, setHEXColor] = useState(defaulRandHexColor);
  const [RGBColor, setRGBColor] = useState(hex.rgb(defaulRandHexColor));

  const onChangeHandler = (evt) => {
    
  }

  return (
    <div className={styles.wrapper} style={bgcStyle.wrapper}>
      <ColorTable rgb={RGBColor} hex={HEXColor} onChangeHandler={() => {}}/>
    </div>
  )
}

ColorBody.propTypes = {}

export default ColorBody
