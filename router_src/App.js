import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class App extends React.Component{
    render(){
        return (
            <div>
                <div className="AppLeft">
                    <ul>
                        <li><Link to='/'>首页</Link></li>
                        <li><Link to='/Chapter1'>犬种智商排名</Link></li>
                        <li><Link to='/Chapter2'>狗的禁忌饮食</Link></li>
                    </ul>
                </div>
                <div className="AppRight">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default App;