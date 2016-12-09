import React, { Component } from 'react';
import CommentList from "./CommentList";

class CommentBox extends Component{
    render(){
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList></CommentList>
            </div>
        );
    }
} 

export default CommentBox;