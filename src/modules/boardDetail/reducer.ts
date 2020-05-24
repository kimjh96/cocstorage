import { createReducer } from 'typesafe-actions';
import {
	FETCH_BOARD_DETAIL,
	FETCH_BOARD_DETAIL_SUCCEEDED,
	FETCH_BOARD_DETAIL_FAILED,
	FETCH_BOARD_DETAIL_COMMENTS,
	FETCH_BOARD_DETAIL_COMMENTS_SUCCEEDED,
	FETCH_BOARD_DETAIL_COMMENTS_FAILED
} from './actions';
import { BoardDetailAction, BoardDetailState } from './types';

const initialState: BoardDetailState = {
	board: {
		data: {
			id: 0,
			data_no: 0,
			category_id: null,
			orderType: null,
			nickname: null,
			password: null,
			ip: null,
			subject: null,
			description: null,
			content: null,
			image: null,
			up: null,
			down: null,
			view: null,
			best: false,
			original_category_id: null,
			original_id: null,
			register_date: null,
			commentCount: 0
		},
		pending: true,
		error: false,
		errorMessage: null
	},
	comment: {
		data: [],
		count: 0,
		loadedCount: 0,
		pending: true,
		error: false,
		errorMessage: null
	}
};

const boardDetail = createReducer<BoardDetailState, BoardDetailAction>(initialState, {
	[FETCH_BOARD_DETAIL]: (state) => ({
		board: {
			...state.board,
			pending: true,
			error: false,
			errorMessage: null
		},
		comment: {
			...state.comment,
			pending: true,
			error: false,
			errorMessage: null
		}
	}),
	[FETCH_BOARD_DETAIL_SUCCEEDED]: (state, { payload }) => ({
		...state,
		board: {
			data: { ...payload },
			pending: false,
			error: false,
			errorMessage: null
		}
	}),
	[FETCH_BOARD_DETAIL_COMMENTS]: (state) => ({
		...state,
		comment: {
			...state.comment,
			pending: true,
			error: false,
			errorMessage: null
		}
	}),
	[FETCH_BOARD_DETAIL_COMMENTS_SUCCEEDED]: (state, { payload }) => ({
		...state,
		comment: {
			data: payload.commentList,
			count: payload.count,
			loadedCount: payload.loadedCount,
			pending: false,
			error: false,
			errorMessage: null
		}
	})
});

export default boardDetail;
