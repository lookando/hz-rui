import React from "react";
import Btn from '@/components/hz-dropdown/style'

const HzDropdown = () => {

  const hov = 'hov_before'


  return <Btn>
    <>
      <div>
        <span className="hov" onMouseEnter={() => {
          hov = 'hov_after';

        }}>
          御剑乘风来,除魔天地间!
        </span>
      </div>
      <div className={hov}>
        <li>1st</li>
        <li>2st</li>
        <li>3st</li>
      </div>

    </>


  </Btn>
};


export default HzDropdown
