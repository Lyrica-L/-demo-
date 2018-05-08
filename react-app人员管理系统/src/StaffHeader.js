import React,{Component} from 'react';

export default class StaffHeader extends Component{
    onSearch(e){
        this.props.searchFn(e.target.value);
    }
    render(){
        return(
            <div className="headerDiv">
                <h1>{this.props.title}</h1>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <label>人员搜索：</label>
                            <input type="text"
                                   placeholder="Search..."
                                   onChange={this.onSearch.bind(this)}
                            />
                        </td>
                        <td>
                            <label>筛选：</label>
                            <select>
                                <option value="0">无效</option>
                                <option value="1">主任</option>
                                <option value="2">老师</option>
                                <option value="3">学生</option>
                                <option value="4">实习</option>
                            </select>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}