import React, { useState } from "react";
import Btn from '@/components/hz-dropdown/style'

const HzDropdown = () => {
  const [hov, setHov] = useState('hov_before')
  let timer
  return <Btn width={120}>
    <>
      <div>
        <a className="hov" onMouseEnter={() => {
          clearTimeout(timer);
          timer = setTimeout(() => {
            //根据官网事例，必须在enter和leave里面调用done函数，不然过渡动画不生效（切记）
            setHov('hov_after');
          }, 250);
        }} onMouseLeave={() => {
          setHov('hov_before')
        }}>
          dropdown
        </a>
      </div>
      <div   className={hov} onMouseEnter={() => {
        setHov('hov_after');
      }} onMouseLeave={() => {
        setHov('hov_before')
      }}>
        <div>
          <li onClick={()=>{console.log(11);}}>1st</li>
          <li>2st</li>
          <li>3st</li>
        </div>

      </div>

    </>


  </Btn>
};


export default HzDropdown
