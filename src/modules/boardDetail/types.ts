import { ActionType } from 'typesafe-actions';
import {
	fetchBoardDetail,
	fetchBoardDetailSucceeded,
	fetchBoardDetailFailed,
	fetchBoardDetailComments,
	fetchBoardDetailCommentsSucceeded,
	fetchBoardDetailCommentsFailed,
	postBoardDetailRecommend,
	postBoardDetailRecommendSucceeded,
	postBoardDetailRecommendFailed,
	clearBoardDetailRecommendState
} from './actions';

const actions = {
	fetchBoardDetail,
	fetchBoardDetailSucceeded,
	fetchBoardDetailFailed,
	fetchBoardDetailComments,
	fetchBoardDetailCommentsSucceeded,
	fetchBoardDetailCommentsFailed,
	postBoardDetailRecommend,
	postBoardDetailRecommendSucceeded,
	postBoardDetailRecommendFailed,
	clearBoardDetailRecommendState
};

export type BoardDetailAction = ActionType<typeof actions>;

export type FetchBoardDetailPayload = {
	id: number;
	categoryId: string | string[];
};

export type FetchBoardDetailCommentPayload = {
	id?: number;
	boardDataNo?: number;
	categoryId: string | string[];
	row: number;
};

export type PostBoardDetailRecommendPayload = {
	id: number;
	categoryId: string | string[];
	recommendType: string;
};

export type PostBoardDetailRecommendFailedPayload = {
	error: boolean;
	errorMessage: string;
};

export type FetchBoardDetailCommentSucceededPayload = {
	commentList: BoardDetailComment[];
	count: number;
	loadedCount: number;
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

export type BoardDetailComment = {
	id: number | null;
	data_no: number | null;
	data_article_no: number | null;
	category_id: string | null;
	nickname: string | null;
	password: string | null;
	ip: string | null;
	content: string | null;
	up: number | null;
	down: number | null;
	original_id: string | null;
	register_date: string | null;
	writer: boolean | null;
	status: number | null;
	commentReplyList: BoardDetailCommentReply[];
};

export type BoardDetailCommentReply = {
	id: number | null;
	data_no: number | null;
	data_article_no: number | null;
	data_comment_no: number | null;
	nickname: string | null;
	password: string | null;
	ip: string | null;
	content: string | null;
	original_id: string | null;
	register_date: string | null;
	writer: boolean | null;
	status: number | null;
};

export type BoardDetailState = {
	board: {
		data: Board;
		pending: boolean;
		error: boolean;
		errorMessage: string | null;
	};
	comment: {
		data: BoardDetailComment[];
		count: number;
		loadedCount: number;
		pending: boolean;
		error: boolean;
		errorMessage: string | null;
	};
	recommend: {
		data: string | null;
		pending: boolean;
		error: boolean;
		errorMessage: string | null;
	};
};
