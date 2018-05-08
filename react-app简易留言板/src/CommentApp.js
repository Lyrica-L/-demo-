import React,{ Component } from 'react';
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

class CommentApp extends Component{
    constructor(){
        super();
        this.state={
            commtArr:[]
        }

    }
    // 为子组件input传递数据
    handleSubmitComment(n){
        this.state.commtArr.push(n);
        this.setState({
            commtArr:this.state.commtArr
        })
    }

    render(){
        return (
            <div className="wrapper">
                <CommentInput handleComment={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.commtArr}/>
            </div>
        )
    }
}

export default CommentApp;