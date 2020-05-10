import { all } from 'redux-saga/effects';
import home from './home';

export default function* rootSaga() {
	yield all([home()]);
}
