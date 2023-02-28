import userReducer from "./reducer/userReducer"
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    userReducer
});
  
export default rootReducer;