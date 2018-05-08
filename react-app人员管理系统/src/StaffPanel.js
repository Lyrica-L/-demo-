import React,{Component} from 'react';
import StaffItem from './StaffItem';

export default class StaffPanel extends Component{
    render(){
        // console.log(this.props.items[0]);
        let _item = [];

        if(this.props.items.length === 0){
            _item.push(<tr key={0}><td>没有记录</td></tr>)
        }else{
            this.props.items.forEach(_itm =>{
                _item.push(<StaffItem record={_itm.info} key={_itm.key}/>)
            })
        }

        return(
            <div className="panelDiv">
                <table>
                    <thead>
                    <tr>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>身份</th>
                        <th>性别</th>
                    </tr>
                    </thead>
                    <tbody>{_item}</tbody>
                </table>
            </div>
        )
    }
}