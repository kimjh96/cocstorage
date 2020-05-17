import { combineReducers } from 'redux';

// Reducers
import home from './home';
import board from './board';

const rootReducer = combineReducers({
	home,
	board
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
