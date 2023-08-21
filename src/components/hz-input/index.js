import React, { useState, useRef } from "react";
import Btn from '@/components/hz-input/style'


const HzInput = (props) => {
  const {focus,change,blur} = props
  const handleClick = e => {
    return focus;
  };
  const handleChange = e =>{
    return change;
  }
  const handleBlur = e =>{
    return blur;
  }
  return <Btn>
    <div>
      <input onBlur={handleBlur()} onFocus={handleClick()} onChange={handleChange()} ></input>
    </div>
  </Btn>
};

export default HzInput