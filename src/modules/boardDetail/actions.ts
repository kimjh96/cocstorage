import { createAction } from 'typesafe-actions';
import { Board } from '../board';
import { FetchBoardDetailPayload } from './types';

export const FETCH_BOARD_DETAIL = 'board/FETCH_BOARD_DETAIL';
export const FETCH_BOARD_DETAIL_SUCCEEDED = 'board/FETCH_BOARD_DETAIL_SUCCEEDED';
export const FETCH_BOARD_DETAIL_FAILED = 'board/FETCH_BOARD_DETAIL_FAILED';

export const fetchBoardDetail = createAction(FETCH_BOARD_DETAIL)<FetchBoardDetailPayload>();
export const fetchBoardDetailSucceeded = createAction(FETCH_BOARD_DETAIL_SUCCEEDED)<Board>();
export const fetchBoardDetailFailed = createAction(FETCH_BOARD_DETAIL_FAILED)();
