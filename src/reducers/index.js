import { combineReducers } from 'redux';
import screenSourceReducer from './screenSourceReducer';
import selectedScreenSourceReducer from './selectedScreenSourceReducer';

const rootReducer = combineReducers({
  screenSources: screenSourceReducer,
  selectedScreenSource: selectedScreenSourceReducer
});

export default rootReducer;
