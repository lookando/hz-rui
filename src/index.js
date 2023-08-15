import React from 'react';
import ReactDOM from 'react-dom';
import { ChangeButton, InSelect, HzButton } from './components/index';

const App = () => {
  return (
    <div>
      <HzButton ></HzButton>
      <HzButton type='primary' onClick={(e) => { console.log(e); }}></HzButton>
      <HzButton type='dashed'></HzButton>
      <HzButton type='text'></HzButton>
      <HzButton type='link'></HzButton>
    </div>
  )
}

//要实现局部热更新，必须要添加此句
if (module.hot) { module.hot.accept() }

ReactDOM.render(<App />, document.getElementById('root'));
