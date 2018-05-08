import React,{Component} from 'react';

export default class StaffFooter extends Component{
    submitBtn(e){
        e.preventDefault();

        let addForm = this.refs.addForm;
        let name    = addForm.querySelector('#addNameId');
        let age     = addForm.querySelector('#addAgeId');
        let id      = addForm.querySelector('#addIdId');
        let gender  = addForm.querySelector('#addGenderId');

        let _itm    = {};
        _itm.info = {
            name: name.value,
            age: age.value,
            id: id.options[id.selectedIndex].value,
            gender: gender.options[gender.selectedIndex].value
        };

        this.props.addStaffFn(_itm);
    }
    render(){
        return(
            <div className="footerDiv">
                <h3>{this.props.title}</h3>
                <form ref="addForm">
                    <div>
                        <ul>
                            <li>
                                <label htmlFor="addNameId">姓名：</label>
                                <input ref="addName" id="addNameId" type="text" placeholder="Name"/>
                            </li>
                            <li>
                                <label htmlFor="addAgeId">年龄：</label>
                                <input ref="addAge" id="addAgeId" type="text" placeholder="Age"/>
                            </li>
                            <li>
                                <label htmlFor="addIdId">身份：</label>
                                <select ref="addId" id="addIdId">
                                    <option value="主任">主任</option>
                                    <option value="老师">老师</option>
                                    <option value="实习">实习</option>
                                    <option value="学生">学生</option>
                                </select>
                            </li>
                            <li>
                                <label htmlFor="addGenderId">性别：</label>
                                <select ref="addGender" id="addGenderId">
                                    <option value="男">男</option>
                                    <option value="女">女</option>
                                </select>
                            </li>
                            <button onClick={this.submitBtn.bind(this)}>提交</button>
                        </ul>
                    </div>
                </form>
            </div>
        )
    }
}