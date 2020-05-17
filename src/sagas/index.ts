import { all } from 'redux-saga/effects';

// Sagas
import home from './home';
import board from './board';

export default function* rootSaga() {
	yield all([home(), board()]);
}
