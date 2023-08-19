import styled from 'styled-components';

// css
const Btn = styled.div`
  input{
    box-sizing: border-box;
    margin: 0;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
    position: relative;
    display: inline-block;
    width: 100px;
    min-width: 0;
    background-color: #ffffff;
    background-image: none;
    border-width: 1px;
    border-style: solid;
    border-color: #d9d9d9;
    border-radius: 6px;
    transition: all 0.2s;
    &:hover{
      border-color: #4096ff;
      border-inline-end-width: 1px;
    }
    &:focus{
      border-color: #4096ff;
      box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
      border-inline-end-width: 1px;
      outline: 0;
    }
  }
   
`

export default Btn