import { combineReducers } from 'redux';

// Reducers
import home from './home';
import board from './board';
import boardDetail from './boardDetail';

const rootReducer = combineReducers({
	home,
	board,
	boardDetail
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
