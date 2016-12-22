import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {fetchPosts} from '../actions/index';

class PostsIndex extends Component{

	constructor(props) {
		super(props);
		this.renderPosts=this.renderPosts.bind(this);
	}

	componentWillMount() {
		this.props.fetchPosts();
	}

	renderPosts(){
		return this.props.posts.map((post)=>{
			return (
				<li className='list-group-item' key={post.id}>
					<span className='pull-right'>{post.categories}</span>
					<strong>{post.title}</strong>					
				</li>
			)
		})
	}

	render() {		
		
		return(
			<div>
				<div className='pull-right'>
					<Link className='btn btn-success' to='/posts/new'>Create a Post</Link>				
				</div>
				<h3>Posts</h3>
				<ul className='list-group'>
					{this.renderPosts()}
				</ul>
			</div>
		)
	}
}	

function mapStateToProps(state){
	return {posts: state.posts.all};
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
		