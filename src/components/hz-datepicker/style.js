import styled from 'styled-components';
// css
const Btn = styled.div`
  .hov{
    color: #1677ff;
  
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

    position: absolute;
    background: #fff;
    opacity: 1;
    width:auto;
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
  .picker_content{
   /* display: flex; */
  /* padding:13px; */
  }
  table{
    /* display: ; */
    /* margin:2px 5px; */
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    text-align:center; 
    border-spacing:0;
    thead{
      display: table-header-group;
      vertical-align: middle;
      border-color: inherit;
    }
    td,th{
      display: inline-block;
      /* border-spacing: 2px; */
      width:30px; 
      height:30px;
      /* margin:7px; */
     
      display: table-cell;
      vertical-align: inherit;
      text-align: center;
      cursor:pointer;
      div{
        border-radius: 4px;
        &:hover{
        background-color:#f5f5f5;
      
      }
      }
   
     
    }
  }

`;

export default Btn