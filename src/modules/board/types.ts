import { ActionType } from 'typesafe-actions';
import {
	fetchBoards,
	fetchBoardsSucceeded,
	fetchBoardsFailed,
	handleBoardsSearchState,
	clearBoardsSearchState
} from './actions';

const actions = {
	fetchBoards,
	fetchBoardsSucceeded,
	fetchBoardsFailed,
	handleBoardsSearchState,
	clearBoardsSearchState
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
export type Board = {
	id: number | null;
	data_no: number | null;
	category_id: string | null;
	orderType: string | null;
	nickname: string | null;
	password: string | null;
	ip: string | null;
	subject: string | null;
	description: string | null;
	content: string | null;
	image: string | null;
	up: number | null;
	down: number | null;
	view: number | null;
	best: boolean | null;
	original_category_id: string | null;
	original_id: string | null;
	register_date: string | null;
	commentCount: number | null;
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
	pending: boolean;
	error: boolean;
	errorMessage: string | null;
};
