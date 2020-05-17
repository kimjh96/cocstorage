import { createReducer } from 'typesafe-actions';
import { FETCH_MAIN_CONTENTS, FETCH_MAIN_CONTENTS_SUCCEEDED, FETCH_MAIN_CONTENTS_FAILED } from './actions';
import { HomeAction, HomeState } from './types';

const initialState: HomeState = {
	category: {
		id: null,
		name: null,
		register_date: null,
		update_date: null
	},
	boardList: [],
	dailyPopularList: [],
	storageList: [],
	noticeList: [],
	pending: false,
	error: false,
	errorMessage: null
};

const home = createReducer<HomeState, HomeAction>(initialState, {
	[FETCH_MAIN_CONTENTS]: (state) => ({
		...state,
		pending: true,
		error: false,
		errorMessage: null
	}),
	[FETCH_MAIN_CONTENTS_SUCCEEDED]: (state, { payload }) => ({
		...payload,
		pending: false,
		error: false,
		errorMessage: null
	}),
	[FETCH_MAIN_CONTENTS_FAILED]: (state, { payload }) => ({
		...state,
		pending: false,
		error: true,
		errorMessage: payload
	})
});

export default home;
