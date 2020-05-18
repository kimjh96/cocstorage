import { createReducer } from 'typesafe-actions';
import { FETCH_BOARD_DETAIL, FETCH_BOARD_DETAIL_SUCCEEDED, FETCH_BOARD_DETAIL_FAILED } from './actions';
import { BoardDetailAction, BoardDetailState } from './types';

const initialState: BoardDetailState = {
	board: {
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
};

const boardDetail = createReducer<BoardDetailState, BoardDetailAction>(initialState, {
	[FETCH_BOARD_DETAIL]: (state, { payload }) => ({
		...state,
		pending: true,
		error: false,
		errorMessage: null
	}),
	[FETCH_BOARD_DETAIL_SUCCEEDED]: (state, { payload }) => ({
		...state,
		board: {
			...payload
		},
		pending: false,
		error: false,
		errorMessage: null
	})
});

export default boardDetail;
