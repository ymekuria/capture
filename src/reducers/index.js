import { combineReducers } from 'redux';
import screenSourceReducer from './screenSourceReducer';
import selectedScreenSourceReducer from './selectedScreenSourceReducer';
import mediaStreamReducer from './mediaStreamReducer';

const rootReducer = combineReducers({
  screenSources: screenSourceReducer,
  selectedScreenSource: selectedScreenSourceReducer,
  mediaStrean: mediaStreamReducer
});

export default rootReducer;
