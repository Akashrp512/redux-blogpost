import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from "../actions/index"

class PostList extends React.Component {

componentDidMount() {
    this.props.fetchPosts();
}

    render() {
        return <div className='ui header'>Post List</div>
    }
}

export default connect(null, {fetchPosts}) (PostList);