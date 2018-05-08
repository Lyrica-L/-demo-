import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import Counter from './component/counter';
import count from './reducers';

const store = createStore(count);
const render = ()=>ReactDOM.render(
    <Counter value={store.getState()}
             onAdd={()=>store.dispatch({type:'add'})}
             onMinus={()=>store.dispatch({type:'minus'})}
    />,
    document.getElementById('root')
);
// 执行render
render();
// 监听状态
store.subscribe(render);