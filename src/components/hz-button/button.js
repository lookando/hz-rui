import React from 'react';
// import { createUseStyles } from 'react-jss';
import Btn from '@/components/hz-button/style'

const Button = (props) => {
  //   const useStyles = createUseStyles({
  //     primary: {
  //       color: '#fff',
  //       backgroundColor: '#1677ff',
  //     },
  //   })
  //   const { primary } = useStyles()
  const { type, onClick, icon, children, size, shape, disabled } = props
  let _type = ''
  let _size = ''
  let _shape = ''
  let _disable = ''
  let _icon = ''
  disabled == true ? _disable = 'disable' : ''
  type == undefined ? _type = 'default' : _type = type
  shape == undefined ? _shape = 'default' : _shape = 'btn-circle'
  size == undefined ? _size = 'default' : size == 'large' ? _size = 'btn-lg' : size == 'small' ? _size = 'btn-sm' : ''
  icon == undefined ? _icon = '' : _icon = 'icon'
  const handleClick = e => {
    if (disabled) {
      return;
    }
    return onClick;
  };
console.log(type);

  return <Btn>
    <button className={[`${_type}`, `${_size}`, `${_shape}`, `${_disable}`].join(' ')} onClick={handleClick()}>
      <span className={_icon}>
        <span className='anticon'>{icon}</span>
      </span>
      <span>{children}</span>
    </button>
  </Btn>

}


export default Button