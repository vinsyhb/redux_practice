debugger;
const counter = (state=0, action) =>{
	switch(action.type){
		case "INCREMENT":
			return state+1;
		case "DECREMENT":
			return state -1;
		default:
			return 0;
	}
}
//var createStore = Redux.createStore;
//import {createStore} from 'redux';
var {createStore} = Redux;

var store = createStore(counter);

debugger;

const Counter = ({value,onIncrement,onDecrement})=>(
	<div>
		<h1>{value}</h1>
		<button onClick={onIncrement}>+</button>
		<button onClick={onDecrement}>-</button>
	</div>
)
const increment = ()=>{
	debugger;
	store.dispatch({type:'INCREMENT'});
}
const decrement = ()=>{
	debugger;
	store.dispatch({type:'DECREMENT'});
}

var render = ()=>{
	debugger;
	ReactDOM.render(
		<Counter value={store.getState()} 
		onIncrement={increment} 
		onDecrement={decrement}/>,
		 document.getElementById('app'));
}
store.subscribe(render);

render();

