import { takeLatest, call, put } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

// Modules
import {
	FETCH_BOARDS,
	CLEAR_BOARDS_RELATED_STATE,
	fetchBoards,
	fetchBoardsSucceeded
} from '../modules/board/actions';

// Service
import * as Service from '../services/boardService';

function* watchFetchBoards({ payload }: ActionType<typeof fetchBoards>) {
	const { searchState, page } = payload;

	try {
		if (typeof window !== 'undefined') {
			window.localStorage.setItem('coc-page', String(page));
			window.localStorage.setItem('coc-searchState', JSON.stringify(searchState));
		}

		const response = yield call(searchState?.handle ? Service.fetchSearchBoards : Service.fetchBoards, payload);
		yield put(fetchBoardsSucceeded(response.data));
	} catch (error) {
		console.log(error);
	}
}

function* watchClearBoardsRelatedState() {
	try {
		if (typeof window !== 'undefined') {
			yield window.localStorage.removeItem('coc-page');
			yield window.localStorage.removeItem('coc-searchState');
		}
	} catch (error) {
		console.log(error);
	}
}

function* boardSaga() {
	yield takeLatest(FETCH_BOARDS, watchFetchBoards);
	yield takeLatest(CLEAR_BOARDS_RELATED_STATE, watchClearBoardsRelatedState);
}

export default boardSaga;
