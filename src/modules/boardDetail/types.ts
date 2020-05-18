import { ActionType } from 'typesafe-actions';
import { fetchBoardDetail, fetchBoardDetailSucceeded, fetchBoardDetailFailed } from './actions';
import { Board } from '../board';

const actions = { fetchBoardDetail, fetchBoardDetailSucceeded, fetchBoardDetailFailed };

export type BoardDetailAction = ActionType<typeof actions>;

export type FetchBoardDetailPayload = {
	id: number;
	categoryId: string | string[];
};

export type BoardDetailState = {
	board: Board;
	pending: boolean;
	error: boolean;
	errorMessage: string | null;
};
