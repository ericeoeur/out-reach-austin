import { combineReducers } from 'redux';
import todos from './todos';

//Import your reducers from your reducer folder
import eventReducer from './eventReducer'; 
import postReducer from './postReducer'; 

//Console.log to check
console.log(todos); 
console.log(eventReducer);

//Combine Reducers here 
const rootReducer = combineReducers({
  todos,
  posts: postReducer,
  events: eventReducer
});

//Export rootReducer to the Store
export default rootReducer;


// const rootReducer = combineReducers({
//   todos,
//   events: eventReducer,
//   posts: postReducer
// });