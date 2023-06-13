import React, { useState } from 'react';
import './index.css'

const inputRef = React.createRef()

const InSelect = () => {
  const [isShow, setIsShow] = useState(false);
  const [downWidth, setDownWidth] = useState();
  return (

    <div className="InSelect">
      <input ref={inputRef}
        style={{ width: 500 }}
        onClick={(e) => { setIsShow(true); setDownWidth(e.target.offsetWidth); console.log(e, '9880'); }}
        onBlur={() => {
          setTimeout(() => {
            setIsShow(false)
          }, 100);
        }}
      ></input>
      {isShow == true ?
        <div className="pull_down" style={{ width: downWidth }} onClick={(e) => { console.log(downWidth, '334534543'); }} >
          <ul>
            <li className='li_pointer' onClick={(e) => {
              inputRef.current.value = e.target.innerText;
            }}>111111111111111</li>
            <li className='li_pointer' onClick={(e) => {
              inputRef.current.value = e.target.innerText;
              console.log(inputRef.current.offsetWidth, '222');
            }}>2222222sfsafsadfsafsadfsa2222</li>
          </ul>
        </div> : null
      }

    </div>
  );
}

export default InSelect;
