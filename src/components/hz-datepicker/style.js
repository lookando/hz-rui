import styled from 'styled-components';
import { slide_in, slide_out } from '../../style/motion/animation';
// css
const Btn = styled.div`
  ${slide_in}
  ${slide_out}
  .hov{
    color: #1677ff;
  }
  .hov_before{
    /* animation: slide_in 1000ms; */
    /* position: absolute; */
    display: none;
  }
  .hov_after{
    /* animation: slide_out 1000ms; */
    display: block;
    /* position: absolute; */
    background: #fff;
    /* opacity: 1; */
    width:220px;
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
     
  }
  .menuItem{
    /* display: none; */
  }
  .picker_content{
   /* display: flex; */
  /* padding:13px; */
  }

.last{
  color: rgba(0, 0, 0, 0.25);
}
.next{
  color:rgba(0, 0, 0, 0.25)
}

.picker_header{
  display: flex;
  width: 100%;
  padding: 0 10px;
  align-items:center;
  justify-content:space-between;
  button{
    cursor: pointer;
    border: 0;
    background: transparent;
  }
}

.active{
  background: #1677ff;
  color: #fff;
}




`;

export default Btn