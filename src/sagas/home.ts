import { takeLatest, put, call } from 'redux-saga/effects';
import * as Service from '../services/homeService';

import { FETCH_MAIN_CONTENTS_REQUESTED, fetchMainContentsSucceeded, fetchMainContentsFailed } from '../modules/home';

function* homeSaga() {
	yield takeLatest(FETCH_MAIN_CONTENTS_REQUESTED, watchMainContents);
}

function* watchMainContents() {
	try {
		const contents = yield call(Service.fetchMainContents);
		yield put(fetchMainContentsSucceeded(yield contents.json()));
	} catch (error) {
		yield put(fetchMainContentsFailed(error));
	}
}

export default homeSaga;
