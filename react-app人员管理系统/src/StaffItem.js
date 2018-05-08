import React,{Component} from 'react';

export default class StaffItem extends Component{
    render(){
        return(
            <tr>
                <td>{this.props.record.name}</td>
                <td>{this.props.record.age}</td>
                <td>{this.props.record.id}</td>
                <td>{this.props.record.gender}</td>
            </tr>
        )
    }
}