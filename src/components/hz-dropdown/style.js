import styled from 'styled-components';
import { slide_in,slide_out } from '../../style/motion/animation';
// css
const Btn = styled.div`
  ${slide_in}
  ${slide_out}
.ant-dropdown-trigger{
  position:relative;
}
.hz-dropdown{
    animation: slide_in 150ms;
    margin: 0;
    padding: 0; 
    /* line-height: 1.5714285714285714; */
    display: none;
    list-style: none;
    position: absolute;
    z-index: 1050; 
    /* padding: 4px; */
  .hz-dropdown-menu{
    background: #fff;
    border-radius: 5px;
    list-style-type: none;
    margin:0;
    padding:5px;
    box-shadow:0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    .hz-dropdown-menu-item{
      cursor: pointer;
      background: #fff;
      border-radius: 4px;
      &:hover{
        background: #eee;
      }
    }
   } 
  };
 
`;

export default Btn