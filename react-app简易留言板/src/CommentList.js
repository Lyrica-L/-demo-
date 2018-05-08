import React,{ Component } from 'react';
import Comment from './Comment';

class CommentList extends Component{
    render(){
        return (
            <div className="comment-list">
                {
                    this.props.comments.map((d,i)=>
                        <Comment commts={d} key={i}/>
                    )
                }
            </div>
        )
    }
}

export default CommentList;