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
//var {createStore} = Redux;

//This is an implementation of the redux create store method how it works like
const createStore = (reducer)=>{
	let state;
	let listeners = [];
	const getState = ()=> state;

	const dispatch = (action)=>{
		state = reducer(state, action);
		listeners.forEach((listener)=>{listener()})
	}

	const subscribe = (listener)=>{
		listeners.push(listener);
	}
	dispatch({});
	return {
		dispatch,
		subscribe,
		getState
	}
}
var store = createStore(counter);

//var store = createStore(counter);// this is the redux way of creating the store

debugger;
// store.dispatch({type:'INCREMENT', payload:'1'});
// store.dispatch({type:'DECREMENT', payload:'1'});
// store.dispatch({type:'INCREMENT', payload:'1'});
//store.dispatch({type:'INCREMENT', payload:'1'});
console.log( "Status of the application"+store.getState() );

var render = ()=>{
	document.body.innerText = store.getState();
}
store.subscribe(render);
render();

document.addEventListener('click',()=>{
store.dispatch({type:'INCREMENT'});
});