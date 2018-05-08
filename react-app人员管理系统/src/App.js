import React,{Component} from 'react';
import './App.css';
import StaffHeader from './StaffHeader';
import StaffPanel from './StaffPanel';
import StaffFooter from './StaffFooter';
import StaffData from './data/StaffData';

class App extends Component{
    constructor(){
        super();
        this.state = {
            rawData: new StaffData()
        }
    }
    // 搜索 接收子组件参数并使用
    searchFn(word){
        // console.log(word);
        this.setState({
            rawData: this.state.rawData.searchStaff(word)
        });
    }
    // 添加 接收子组件参数并使用
    addStaffFn(obj){
        this.setState({
            rawData: this.state.rawData.addStaff(obj)
        });
        // console.log(this.state.rawData);
    }
    render(){
        return(
            <div className="appWrap">
                <StaffHeader searchFn={this.searchFn.bind(this)} title="人员管理系统"/>
                <StaffPanel items={this.state.rawData.pickedStaff}/>
                <StaffFooter addStaffFn={this.addStaffFn.bind(this)} title="人员新增"/>
            </div>
        )
    }
}
export default App;