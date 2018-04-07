import { combineReducers } from 'redux';
import todos from './todos';

console.log(todos); 

const rootReducer = combineReducers({
  todos
});

export default rootReducer;