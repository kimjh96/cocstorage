import { createAction } from 'typesafe-actions';
import { BoardState, SearchState, FetchBoardPayload } from './types';

export const FETCH_BOARDS = 'board/FETCH_BOARDS';
export const FETCH_BOARDS_SUCCEEDED = 'board/FETCH_BOARDS_SUCCEEDED';
export const FETCH_BOARDS_FAILED = 'board/FETCH_BOARDS_FAILED';

export const HANDLE_BOARDS_SEARCH_STATE = 'board/HANDLE_BOARDS_SEARCH_STATE';
export const CLEAR_BOARDS_SEARCH_STATE = 'board/CLEAR_BOARDS_SEARCH_STATE';

export const fetchBoards = createAction(FETCH_BOARDS)<FetchBoardPayload>();
export const fetchBoardsSucceeded = createAction(FETCH_BOARDS_SUCCEEDED)<BoardState>();
export const fetchBoardsFailed = createAction(FETCH_BOARDS_FAILED)();

export const handleBoardsSearchState = createAction(HANDLE_BOARDS_SEARCH_STATE)<SearchState>();
export const clearBoardsSearchState = createAction(CLEAR_BOARDS_SEARCH_STATE)();