import React, { useState } from 'react'
import ColorTable from '../color-table/ColorTable'
import { randColor } from '../randomizer';
import { hex } from 'color-convert';
import styles from './ColorBody.module.css';
import { toRgbString } from './toRgbString';

function ColorBody() {
  const defaulRandHexColor = randColor();

  const [bgc, setBgc] = useState(defaulRandHexColor)
  const [RGBColor, setRGBColor] = useState(toRgbString(hex.rgb(defaulRandHexColor)));

  const onChangeHandler = (evt) => {
    const value = evt.target.value;
    
    if(value.length === 7 && value[0] === "#") {
      const newBackground = (hex.keyword(value) === 'black' && value !== "#000000") 
        ? null : toRgbString(hex.rgb(value));
  
      setBgc(newBackground);
      setRGBColor(newBackground || "Ошибка!");
    }
  }

  return (
    <div className={styles.wrapper} style={{backgroundColor: bgc}}>
      <ColorTable rgb={RGBColor} hex={defaulRandHexColor} onChangeHandler={onChangeHandler}/>
    </div>
  )
}

export default ColorBody
