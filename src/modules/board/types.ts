import { ActionType } from 'typesafe-actions';
import {
	fetchBoards,
	fetchBoardsSucceeded,
	fetchBoardsFailed,
	handleBoardsSearchState,
	handleBoardClickCountState,
	clearBoardsRelatedState
} from './actions';
import { Board } from '../boardDetail';

const actions = {
	fetchBoards,
	fetchBoardsSucceeded,
	fetchBoardsFailed,
	handleBoardsSearchState,
	handleBoardClickCountState,
	clearBoardsRelatedState
};

export type BoardAction = ActionType<typeof actions>;

export type FetchBoardPayload = {
	categoryId: string | string[];
	searchState?: SearchState;
	page: number;
};

export type SearchState = {
	handle: boolean;
	type: string;
	value: string;
};

export type Category = {
	id: string | null;
	name: string | null;
	register_date: string | null;
	update_date: string | null;
};

export type BoardState = {
	boardList: Board[];
	category: Category;
	searchState: SearchState;
	pagination: {
		allCount: number;
		endPage: number;
		page: number;
		pageBlock: number;
		pageCount: number;
		row: number;
		startPage: number;
	};
	count: number;
	pending: boolean;
	error: boolean;
	errorMessage: string | null;
};
