import { takeLatest, call, put } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

// Modules
import {
	FETCH_BOARD_DETAIL,
	FETCH_BOARD_DETAIL_COMMENTS,
	fetchBoardDetail,
	fetchBoardDetailSucceeded,
	fetchBoardDetailComments,
	fetchBoardDetailCommentsSucceeded
} from '../modules/boardDetail';

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

function* watchFetchBoardDetailComment({ payload }: ActionType<typeof fetchBoardDetailComments>) {
	try {
		const response = yield call(Service.fetchBoardDetailComments, payload);
		yield put(fetchBoardDetailCommentsSucceeded({
			commentList: response.data.commentList,
			count: response.data.count,
			loadedCount: response.data.loadedCount
		}));
	} catch (error) {
		console.log(error);
	}
}

function* boardDetailSaga() {
	yield takeLatest(FETCH_BOARD_DETAIL, watchFetchBoardDetail);
	yield takeLatest(FETCH_BOARD_DETAIL_COMMENTS, watchFetchBoardDetailComment);
}

export default boardDetailSaga;
