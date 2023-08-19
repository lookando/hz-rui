import styled from 'styled-components';
// css
const Btn = styled.div`
  .hov{
    color: #1677ff;
    &:hover{
      cursor:pointer;
    }
  }
  .hov_before{
    opacity: 0;
    transform:scaleY(0);
    position: absolute;
  }
  .hov_after{

    transform:scaleY(1);
    transform-origin: top center;
    transition: transform 0.03s ease, opacity 0.03s ease;
    cursor:pointer;
    position: absolute;
    background: #fff;
    opacity: 1;
    width:120px;
    border-radius: 6px;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
     div{
      margin: 4px 5px;
      li{
        &:hover{
          z-index:999;
          background: #f5f5f5;
        }
        border-radius: 4px;
      }
     }
     
  }
  .menuItem{
    /* display: none; */
  }

`;

export default Btn