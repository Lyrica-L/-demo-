import React,{ Component } from 'react';

class Counter extends Component{
    render(){
        const {value, onAdd, onMinus} = this.props;
        return (
            <div>
                <button onClick={onMinus}>-</button>
                {' '}
                数值：{value}
                {' '}
                <button onClick={onAdd}>+</button>
            </div>
        )
    }
}
export default Counter;