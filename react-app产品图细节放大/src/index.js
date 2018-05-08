import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './App';
import reducer from './data';

const store = createStore(reducer);
const smallImgs = store.getState().smallImg;
const render = ()=>{
    ReactDOM.render(
        <App bigImg={store.getState().bigImg}
             smallImg={smallImgs}
             ops1={()=>store.dispatch({type:'opt1'})}
             ops2={()=>store.dispatch({type:'opt2'})}
             ops3={()=>store.dispatch({type:'opt3'})}
             ops4={()=>store.dispatch({type:'opt4'})}
             ops5={()=>store.dispatch({type:'opt5'})}
             ops6={()=>store.dispatch({type:'opt6'})}
        />,
        document.getElementById('root')
    );
}

render();
store.subscribe(render);
