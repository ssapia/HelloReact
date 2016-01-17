
//const CommentList = React.createClass({

const React = require('react');
const Comment = require('./Comment.react');

const CommentList = React.createClass({
    render: function() {
        const commentNodes = this.props.data.map(function(comment) {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    },
});

module.exports = CommentList;