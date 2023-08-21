import React from 'react';
import ReactDOM from 'react-dom';
import { HzButton, HzDropdown ,HzDatepicker,HzInput} from '@/components/index';
// import Icon from 'svg-react-loader?./svg/my-icon.svg';
import { ReactComponent as Add } from '@/svg/add.svg';
import { ReactComponent as Like } from '@/svg/like.svg';
import { GlobalStyle } from './style'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <HzButton onClick={() => {
          }}>按 钮</HzButton>
          <HzButton type='primary'>按 钮</HzButton>
          <HzButton type='dashed'>按 钮</HzButton>
          <HzButton type='text'>按 钮</HzButton>
          <HzButton type='link'>按 钮</HzButton>
        </div>
        <div>-------------------------------------</div>
        <div>
          <HzButton type='primary' icon={<Add />}>按 钮</HzButton>
        </div>
        <div>-------------------------------------</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <HzButton type='primary' size='large'>按 钮</HzButton>
          <HzButton type='primary' >按 钮</HzButton>
          <HzButton type='primary' size='small'>按 钮</HzButton>
        </div>
        <div>-------------------------------------</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <HzButton type='primary' shape='circle' icon={<Add />}></HzButton>
          <HzButton type='primary' shape='circle' icon={<Like />}></HzButton>
        </div>
        <HzButton type='primary' onClick={() => {
          console.log(111);
        }} disabled >按 钮</HzButton>


      </div>
      <div>--------------------------------------------------------</div>

      <div>
        <HzDropdown></HzDropdown>
      </div>
      <div>--------------------------------------------------------</div>
      <div>
        <HzInput blur={()=>{console.log(222);}} focus={()=>{console.log(111);}} change={()=>{console.log(333);}}></HzInput>
      </div>
      <div>--------------------------------------------------------</div>

      <div>
        <HzDatepicker></HzDatepicker>
      </div>
 
    </>

  )
}

//要实现局部热更新，必须要添加此句
if (module.hot) { module.hot.accept() }

ReactDOM.render(<App />, document.getElementById('root'));
