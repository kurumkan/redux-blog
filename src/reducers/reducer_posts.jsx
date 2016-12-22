const INITAIL_STATE={
	all: [],
	post: null
}

export default function(state=INITAIL_STATE,action){
	switch(action.type){
		case 'FETCH_POSTS':
			return {
				...state,
				all: action.payload.data
			}
		case 'CREATE_POST':

			return {
				...state,
				all: [					
					action.payload.data,
					...state.all
				]
			}	
		case 'FETCH_POST':
			return {
				...state,
				post: action.payload.data
			}

		case 'DELETE_POST':
			return {
				...state,
				all: state.all.filter((post)=>action.payload.data.id!==post.id)
			}

			
		default:
			return state;
	}
}