import { takeLatest, call, put } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

// Modules
import { FETCH_BOARD_DETAIL, fetchBoardDetail, fetchBoardDetailSucceeded } from '../modules/boardDetail';

// Service
import * as Service from '../services/boardDetailService';

function* watchFetchBoardDetail({ payload }: ActionType<typeof fetchBoardDetail>) {
	try {
		const response = yield call(Service.fetchBoardDetail, payload);
		yield put(fetchBoardDetailSucceeded(response.data));
	} catch (error) {
		console.log(error);
	}
}

function* boardDetailSaga() {
	yield takeLatest(FETCH_BOARD_DETAIL, watchFetchBoardDetail);
}

export default boardDetailSaga;
