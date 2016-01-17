
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

const React = require('react');


const CommentForm = React.createClass({
    getInitialState: function() {
        return {author: '', text: ''};
    },
    handleAuthorChange: function(e) {
        this.setState({author: e.target.value});
    },
    handleTextChange: function(e) {
        this.setState({text: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        const author = this.state.author.trim();
        const text = this.state.text.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        this.setState({author: '', text: ''});
    },
    render: function() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <TextField
                    hintText="Your name"
                    // />

                    // <input
                    //  type="text"
                    //  placeholder="Your name"
                    value={this.state.author}
                    onChange={this.handleAuthorChange}
                    />

                <TextField
                    hintText="Say something..."
                    value={this.state.text}
                    onChange={this.handleTextChange}
                    />
                <RaisedButton type="submit" label="post" className="button-submit" primary={true} />
            </form>
        );
    },
});

module.exports = CommentForm;