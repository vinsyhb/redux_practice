const todo = (state, action)=>{
	switch(action.type){
		case "ADD_TODO":
			return{
				id:action.id,
				text:action.text,
				completed:false
			}
		case "TOGGLE_TODO":
			if(state.id != action.id){
				return state;
			}
			return {
				...state,
				completed:!state.completed
			}
		default:
		return state;
	}
}



const todos = (state=[], action)=>{
	
	switch(action.type){
		case "ADD_TODO":
			return [
			...state,
			  todo(undefined,action)
			];
		case "TOGGLE_TODO":
		return state.map((t)=>{
			return todo(t);	
		});
		default:
			return state;

	}
}
const visibilityFilter= (state="SHOW_ALL",action)=>{
	switch(action.type){
		case "VISIBILITY_FILTER":
			return action.filter;
			default:
			return state;
	}
}
const { combinedReducers } = Redux;

const todoApp = combinedReducers({
	todos:todos,
	visibilityFilter:visibilityFilter
});
//Implemenation in pure javascript
/*
	var combinedReducers = (reducers)=>{
		return (state, action)=>{
			return Object.keys(reducers).reduce( (nextState,key)=>{
					nextState[key] = reducers[key](state[key],action);
					return nextState;
				},{}
			);
		}
	}


*/

// const todoApp = combinedReducers({
// 	todos,
// 	visibilityFilter
// });//ES6 object literal shortahand notation

var {createStore} = Redux;
var store = createStore(todoApp);
store.dispatch({type:"ADD_TODO",id:1,text:'Go to shopping'});
store.dispatch({type:"ADD_TODO",id:2,text:'Go to market'});

store.dispatch({type:"TOGGLE_TODO",id:1});


store.dispatch({type:"VISIBILITY_FILTER",filter:"COMPLETED"});