import React from 'react';
// import { createUseStyles } from 'react-jss';
import Btn from './style'

const Button = (props) => {
  //   const useStyles = createUseStyles({
  //     primary: {
  //       color: '#fff',
  //       backgroundColor: '#1677ff',
  //     },
  //   })
  //   const { primary } = useStyles()
  const { type ,onClick} = props
  let _type = ''
  type == undefined ? _type = 'default' : _type = type

  return <Btn>
    <button className={_type} onClick={onClick}>按钮</button>
  </Btn>

}

export default Button