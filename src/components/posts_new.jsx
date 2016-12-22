import React, { Component, PropTypes } from 'react';
import {reduxForm} from 'redux-form';
import {Link} from 'react-router'

import {createPost} from '../actions';

class PostsNew extends Component{

	static contextTypes = {
		router: PropTypes.object
	};
	
	onSubmit(props){
		this.props.createPost(props)
			.then(()=>{
				this.context.router.push('/')		
			});		
	}

	render() {
		var {handleSubmit, fields: {title, categories, content}}=this.props;		
		return(			
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create A New Post</h3>
				<div className={`form-group ${title.touched&&title.invalid? 'has-danger' : ''}`}>
					<label>Title</label>
					<input type='text' className='form-control' {...title} />
					<div className='text-danger'>
						{title.touched?title.error:''}
					</div>
				</div>
				<div className={`form-group ${categories.touched&&categories.invalid? 'has-danger' : ''}`}>				
					<label>Categories</label>
					<input type='text' className='form-control' {...categories}/>
					<div className='text-danger'>
						{categories.touched?categories.error:''}
					</div>
				</div>
				<div className={`form-group ${content.touched&&content.invalid? 'has-danger' : ''}`}>				
					<label>Content</label>
					<textarea type='text' className='form-control' {...content}/>
					<div className='text-danger'>
						{content.touched?content.error:''}
					</div>
				</div>
				<button className='btn btn-primary'>Submit</button>
				<Link to='/' className='btn btn-danger'>Cancel</Link>
			</form>
		)
	}
}	

function validate(values){
	const errors={};
	if(!values.title){
		errors.title='Enter a username'
	}
	if(!values.categories){
		errors.categories='Enter categories'	
	}
	if(!values.content){
		errors.content='Enter some content'	
	}
	return errors;
}



export default reduxForm({
	//passing our configuration to reduxForm

	//name of the form
	//must be unique	
	form: 'PostsNewForm',
	//any change on each input filed of the form will instantly be reflected on state.form
	fields: ['title','categories','content'],
	validate
},null, {createPost})(PostsNew);
		