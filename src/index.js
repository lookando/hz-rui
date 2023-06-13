import React from 'react';
import ReactDOM from 'react-dom';
import {ChangeButton,InSelect} from './components/index';

const App = () => {
  return (
    <div>
      <ChangeButton />
      <InSelect></InSelect>
    </div>
  )
}

//要实现局部热更新，必须要添加此句
if (module.hot) {module.hot.accept()}

ReactDOM.render(<App />, document.getElementById('root'));
