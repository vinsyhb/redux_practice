
const todos = (state=[], action)=>{
	
	switch(action.type){
		case "ADD_TODO":
			return [
			...state,
			  {
				id:action.id,
				text:action.text,
				completed:false
				}
			];
		case "TOGGLE_TODO":
		return state.map((todo)=>{
			if(action.id != todo.id){
				return todo;
			}
			return {
				...todo,
				completed:!todo.completed
			}
		});
		default:
			return state;

	}
}


