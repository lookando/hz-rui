import styled from 'styled-components';

// css
const Btn = styled.div`
  .default{
    background-color: #ffffff;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
    font-size: 14px;
    height: 32px;
    padding: 4px 15px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    border: 1px solid transparent;
    border-color: #d9d9d9;
      &:hover {
        color: #4096ff;
        border-color: #4096ff;
    }
  }
  .primary {
    color: #fff;
    background-color: #1677ff;
    box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
    font-size: 14px;
    height: 32px;
    padding: 4px 15px;
    border-radius: 6px;
    cursor: pointer;
    outline: none;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    border: 1px solid transparent;
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    user-select: none;
    touch-action: manipulation;
    line-height: 1.5714285714285714;
      &:hover {
      color: #fff;
      background-color: #4096ff;
    }
  }
  .dashed{
    outline: none;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    user-select: none;
    touch-action: manipulation;
    line-height: 1.5714285714285714;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    height: 32px;
    padding: 4px 15px;
    border-radius: 6px;
    background-color: #ffffff;
    border-color: #d9d9d9;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
    border-style: dashed;
      &:hover {
        color: #4096ff; 
        border-color: #4096ff;
      }
  }
  .text{
    font-size: 14px;
    height: 32px;
    padding: 4px 15px;
    border-radius: 6px;
    outline: none;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    background-color: transparent;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    user-select: none;
    touch-action: manipulation;
    line-height: 1.5714285714285714;
    color: rgba(0, 0, 0, 0.88);
    border: 1px solid transparent;
      &:hover {
        color: rgba(0, 0, 0, 0.88);
        background-color: rgba(0, 0, 0, 0.06);
      }
  }
  .link{
    color: #1677ff;
    font-size: 14px;
    height: 32px;
    padding: 4px 15px;
    border-radius: 6px;
    outline: none;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    background-color: transparent;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    user-select: none;
    touch-action: manipulation;
    line-height: 1.5714285714285714;
    border: 1px solid transparent;
      &:hover {
        color: #69b1ff;
      }
  }
`;

export default Btn