import { combineReducers } from 'redux';
import screenSourceReducer from './screenSourceReducer';

const rootReducer = combineReducers({
  screenSources: screenSourceReducer
});

export default rootReducer;
