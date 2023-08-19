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
    /* opacity: 0; */
    position: absolute;
    transform-origin: top center;
    /* transition:delay 0.1s, transform 0.15s ease, opacity 0.15s ease; */
    transform:scaleY(0);
  }
  .hov_after{
    z-index:10;
    transform:scaleY(1);
    transform-origin: top center;
    transition: transform 0.20s ease, opacity 0.20s ease;
    cursor:pointer;
    position: absolute;
    background: #fff;
    opacity: 1;
    width:${props => props.width}px;
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