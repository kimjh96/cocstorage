import { takeLatest, call, put } from 'redux-saga/effects';

// Modules
import { FETCH_MAIN_CONTENTS, fetchMainContentsSucceeded, fetchMainContentsFailed } from '../modules/home';

// Service
import * as Service from '../services/homeService';

function* watchMainContents() {
	try {
		const response = yield call(Service.fetchMainContents);
		yield put(fetchMainContentsSucceeded(yield response.data));
	} catch (error) {
		yield put(fetchMainContentsFailed(error));
	}
}

function* homeSaga() {
	yield takeLatest(FETCH_MAIN_CONTENTS, watchMainContents);
}

export default homeSaga;
