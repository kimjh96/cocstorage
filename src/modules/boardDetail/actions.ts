import { createAction } from 'typesafe-actions';
import {
	Board,
	FetchBoardDetailPayload,
	FetchBoardDetailCommentPayload,
	FetchBoardDetailCommentSucceededPayload,
	PostBoardDetailRecommendPayload,
	PostBoardDetailRecommendFailedPayload
} from './types';

export const FETCH_BOARD_DETAIL = 'boardDetail/FETCH_BOARD_DETAIL';
export const FETCH_BOARD_DETAIL_SUCCEEDED = 'boardDetail/FETCH_BOARD_DETAIL_SUCCEEDED';
export const FETCH_BOARD_DETAIL_FAILED = 'boardDetail/FETCH_BOARD_DETAIL_FAILED';

export const FETCH_BOARD_DETAIL_COMMENTS = 'boardDetail/FETCH_BOARD_DETAIL_COMMENTS';
export const FETCH_BOARD_DETAIL_COMMENTS_SUCCEEDED = 'boardDetail/FETCH_BOARD_DETAIL_COMMENTS_SUCCEEDED';
export const FETCH_BOARD_DETAIL_COMMENTS_FAILED = 'boardDetail/FETCH_BOARD_DETAIL_COMMENTS_FAILED';

export const POST_BOARD_DETAIL_RECOMMEND = 'boardDetail/POST_BOARD_DETAIL_RECOMMEND';
export const POST_BOARD_DETAIL_RECOMMEND_SUCCEEDED = 'boardDetail/POST_BOARD_DETAIL_RECOMMEND_SUCCEEDED';
export const POST_BOARD_DETAIL_RECOMMEND_FAILED = 'boardDetail/POST_BOARD_DETAIL_RECOMMEND_FAILED';

export const CLEAR_BOARD_DETAIL_RECOMMEND_STATE = 'boardDetail/CLEAR_BOARD_DETAIL_RECOMMEND_STATE';

export const fetchBoardDetail = createAction(FETCH_BOARD_DETAIL)<FetchBoardDetailPayload>();
export const fetchBoardDetailSucceeded = createAction(FETCH_BOARD_DETAIL_SUCCEEDED)<Board>();
export const fetchBoardDetailFailed = createAction(FETCH_BOARD_DETAIL_FAILED)();

export const fetchBoardDetailComments = createAction(FETCH_BOARD_DETAIL_COMMENTS)<FetchBoardDetailCommentPayload>();
export const fetchBoardDetailCommentsSucceeded = createAction(FETCH_BOARD_DETAIL_COMMENTS_SUCCEEDED)<FetchBoardDetailCommentSucceededPayload>();
export const fetchBoardDetailCommentsFailed = createAction(FETCH_BOARD_DETAIL_COMMENTS_FAILED)();

export const postBoardDetailRecommend = createAction(POST_BOARD_DETAIL_RECOMMEND)<PostBoardDetailRecommendPayload>();
export const postBoardDetailRecommendSucceeded = createAction(POST_BOARD_DETAIL_RECOMMEND_SUCCEEDED)<string>();
export const postBoardDetailRecommendFailed = createAction(POST_BOARD_DETAIL_RECOMMEND_FAILED)<PostBoardDetailRecommendFailedPayload>();

export const clearBoardDetailRecommendState = createAction(CLEAR_BOARD_DETAIL_RECOMMEND_STATE)();
