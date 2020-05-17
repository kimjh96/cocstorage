import { takeLatest, call, put } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

// Modules
import { FETCH_BOARDS, fetchBoards, fetchBoardsSucceeded } from '../modules/board/actions';

// Service
import * as Service from '../services/boardService';

function* watchFetchBoards({ payload }: ActionType<typeof fetchBoards>) {
	const { searchState } = payload;

	try {
		const response = yield call(searchState?.handle ? Service.fetchSearchBoards : Service.fetchBoards, payload);
		yield put(fetchBoardsSucceeded(response.data));
	} catch (error) {
		console.log(error);
	}
}

function* boardSaga() {
	yield takeLatest(FETCH_BOARDS, watchFetchBoards);
}

export default boardSaga;
