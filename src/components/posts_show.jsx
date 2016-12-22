import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {fetchPost, deletePost} from '../actions'

class PostsShow extends Component{

	static contextTypes = {
		router: PropTypes.object
	};

	componentWillMount() {		
		this.props.fetchPost(this.props.params.id);
		this.handleDelete=this.handleDelete.bind(this);
	}

	handleDelete(e){
		this.props.deletePost(this.props.params.id)
			.then(()=>{
				this.context.router.push('/')		
			});			
	}

	render() {
		var {post} = this.props;

		if(!post)
			return (<div>Loading ... </div>)

		return(
			<div>
				<Link to='/'>Back To Main Page</Link>
				<button className='btn btn-danger pull-right' onClick={this.handleDelete}>
					Delete Post
				</button>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>				
				<p>
					{post.content}
				</p>
			</div>
		)
	}
}	

function mapStateToProps(state){
	return {post:state.posts.post}
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
		