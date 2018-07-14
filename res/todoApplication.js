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
			return todo(t,action);	
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
debugger;
const { combineReducers } = Redux;

const todoApp = combineReducers({
	todos:todos,
	visibilityFilter:visibilityFilter
});

var {createStore} = Redux;
var store = createStore(todoApp);
store.dispatch({type:"ADD_TODO",id:1,text:'Go to shopping'});
store.dispatch({type:"ADD_TODO",id:2,text:'Go to market'});

store.dispatch({type:"TOGGLE_TODO",id:1});
store.dispatch({type:"ADD_TODO",id:2,text:'Go to market'});

store.dispatch({type:"ADD_TODO",id:2,text:'Go to market'});
//store.dispatch({type:"VISIBILITY_FILTER",id:1,filter:"COMPLETED"});

const TodoApp = (props) => {
	return <div>
				<input type="text" ref={(node)=>{
					this
				}}>
				<button>Add to do</button>
			</div>
}

const render = ()=>{
		ReactDOM.render(<TodoApp/>, document.getElementById('app'));
}
store.subscribe(render);
render();