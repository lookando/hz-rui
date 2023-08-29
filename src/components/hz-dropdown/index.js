import React, { useState, useEffect } from "react";
import Btn from '@/components/hz-dropdown/style'

const HzDropdown = () => {
  let timer
  let close_dropdown = () => {
    setTimeout(() => {
      menu.style.animation = "slide_out 350ms"
    }, 200)
    clearTimeout(timer)
    setTimeout(() => {
      menu.style.display = "none";
    }, 250)
  }
  let open_dropdown = () => {
    clearTimeout(timer)
    setTimeout(() => {
      menu.style.display = "block";
      menu.style.animation = "slide_in 250ms"

    }, 250)
  }
  let out = () => {
    if (window.event.toElement.id != "menu" && window.event.toElement.id != "link" && window.event.toElement.id != "menu_ui" && window.event.toElement.id != "menu_li") {
      close_dropdown()
    }

  }
  return <Btn width={120}>
    <>
      <div onMouseOut={() => {
        out()
      }}>
        <div>
          <a className="ant-dropdown-trigger" onMouseOver={() => {
            open_dropdown()

          }} >
            dropdown
          </a>
        </div>
        <div id="menu" className="hz-dropdown"  >
          <ul id="menu_ui" className="hz-dropdown-menu">
            <li id="menu_li" className="hz-dropdown-menu-item" ><a id="link">1st-----</a> </li>
            <li id="menu_li" className="hz-dropdown-menu-item" ><a id="link">1st-----</a> </li>
            <li id="menu_li" className="hz-dropdown-menu-item" ><a id="link">1st-----</a> </li>
          </ul>

        </div>
      </div>
    </>


  </Btn>
};


export default HzDropdown
