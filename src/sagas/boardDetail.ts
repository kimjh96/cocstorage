import { takeLatest, call, put } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

// Modules
import { handleBoardClickCountState } from '../modules/board';
import {
	FETCH_BOARD_DETAIL,
	FETCH_BOARD_DETAIL_COMMENTS,
	POST_BOARD_DETAIL_RECOMMEND,
	fetchBoardDetail,
	fetchBoardDetailSucceeded,
	fetchBoardDetailComments,
	fetchBoardDetailCommentsSucceeded,
	postBoardDetailRecommend,
	postBoardDetailRecommendSucceeded,
	postBoardDetailRecommendFailed
} from '../modules/boardDetail';

// Service
import * as Service from '../services/boardDetailService';

function* watchFetchBoardDetail({ payload }: ActionType<typeof fetchBoardDetail>) {
	try {
		const response = yield call(Service.fetchBoardDetail, payload);
		yield put(fetchBoardDetailSucceeded(response.data));
		yield put(handleBoardClickCountState());
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

function* watchPostBoardDetailRecommend({ payload }: ActionType<typeof postBoardDetailRecommend>) {
	try {
		const response = yield call(Service.postBoardDetailRecommend, payload);
		yield put(postBoardDetailRecommendSucceeded(response.data));
	} catch (error) {
		yield put(postBoardDetailRecommendFailed({
			error: true,
			errorMessage: error.response.data
		}));
	}
}

function* boardDetailSaga() {
	yield takeLatest(FETCH_BOARD_DETAIL, watchFetchBoardDetail);
	yield takeLatest(FETCH_BOARD_DETAIL_COMMENTS, watchFetchBoardDetailComment);
	yield takeLatest(POST_BOARD_DETAIL_RECOMMEND, watchPostBoardDetailRecommend);
}

export default boardDetailSaga;
