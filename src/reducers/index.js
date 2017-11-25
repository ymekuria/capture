import { combineReducers } from 'redux';
import screenSourceReducer from './screenSourceReducer';
import selectedScreenSourceReducer from './selectedScreenSourceReducer';
import mediaStreamReducer from './mediaStreamReducer';
import recordReducer from './recordReducer';


const rootReducer = combineReducers({
  screenSources: screenSourceReducer,
  selectedScreenSource: selectedScreenSourceReducer,
  mediaStream: mediaStreamReducer,
  recording: recordReducer
});

export default rootReducer;
