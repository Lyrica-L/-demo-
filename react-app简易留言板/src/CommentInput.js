import React,{ Component } from 'react';

class CommentInput extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            content:''
        }
    }
    // 用户名 onChange
    userNameChange(e){
        this.setState({
            username: e.target.value
        })
    }
    // 评论内容 onChange
    contentChange(e){
        this.setState({
            content: e.target.value
        })
    }
    // 点击提交
    submitBtn(){
        this.props.handleComment({
            username: this.state.username,
            content: this.state.content
        });
        // 清空输入框
        this.setState({
            username:'',
            content:''
        })
    }

    render(){
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名:</span>
                    <div className="comment-field-input">
                        <input type="text"
                               onChange={this.userNameChange.bind(this)}
                               value={this.state.username}
                        />
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容:</span>
                    <div className="comment-field-input">
                        <textarea
                            onChange={this.contentChange.bind(this)}
                            value={this.state.content}
                        >
                        </textarea>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.submitBtn.bind(this)}>提交</button>
                </div>
            </div>
        )
    }
}

export default CommentInput;