import React, { useState, useRef ,forwardref} from "react";
import Btn from '@/components/hz-input/style'


const HzInput = (props) => {
  const { focus, change, blur, value, inputRef} = props
  const handleClick = e => {
    return focus;
  };
  const handleChange = e => {
    return change;
  }
  const handleBlur = e => {
    return blur;
  }
  return <Btn>
    <div>
      <input type='text' ref={inputRef}  onBlur={handleBlur()} onFocus={handleClick()} onChange={handleChange()} value={value}></input>
    </div>
  </Btn>
}

export default HzInput