import axios from 'axios';

const ROOT_URL='http://reduxblog.herokuapp.com/api/posts/';
const API_KEY='?key=kurumkan';

export function fetchPosts(){
	var request = axios.get(ROOT_URL+API_KEY);
	return {
		type: 'FETCH_POSTS',
		payload: request
	}
}

export function createPost(post){
	var request = axios.post(ROOT_URL+API_KEY, post);

	return {
		type: 'CREATE_POST',
		payload: request
	}
}