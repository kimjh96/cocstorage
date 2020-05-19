import { createAction } from 'typesafe-actions';
import {
	Board,
	FetchBoardDetailPayload,
	FetchBoardDetailCommentPayload,
	FetchBoardDetailCommentSucceededPayload
} from './types';

export const FETCH_BOARD_DETAIL = 'boardDetail/FETCH_BOARD_DETAIL';
export const FETCH_BOARD_DETAIL_SUCCEEDED = 'boardDetail/FETCH_BOARD_DETAIL_SUCCEEDED';
export const FETCH_BOARD_DETAIL_FAILED = 'boardDetail/FETCH_BOARD_DETAIL_FAILED';

export const FETCH_BOARD_DETAIL_COMMENTS = 'boardDetail/FETCH_BOARD_DETAIL_COMMENTS';
export const FETCH_BOARD_DETAIL_COMMENTS_SUCCEEDED = 'boardDetail/FETCH_BOARD_DETAIL_COMMENTS_SUCCEEDED';
export const FETCH_BOARD_DETAIL_COMMENTS_FAILED = 'boardDetail/FETCH_BOARD_DETAIL_COMMENTS_FAILED';

export const fetchBoardDetail = createAction(FETCH_BOARD_DETAIL)<FetchBoardDetailPayload>();
export const fetchBoardDetailSucceeded = createAction(FETCH_BOARD_DETAIL_SUCCEEDED)<Board>();
export const fetchBoardDetailFailed = createAction(FETCH_BOARD_DETAIL_FAILED)();

export const fetchBoardDetailComments = createAction(FETCH_BOARD_DETAIL_COMMENTS)<FetchBoardDetailCommentPayload>();
export const fetchBoardDetailCommentsSucceeded = createAction(FETCH_BOARD_DETAIL_COMMENTS_SUCCEEDED)<FetchBoardDetailCommentSucceededPayload>();
export const fetchBoardDetailCommentsFailed = createAction(FETCH_BOARD_DETAIL_COMMENTS_FAILED)();
