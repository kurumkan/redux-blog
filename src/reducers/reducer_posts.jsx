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
		default:
			return state;
	}
}