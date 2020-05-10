import { ActionType } from 'typesafe-actions';
import { fetchMainContents, fetchMainContentsSucceeded, fetchMainContentsFailed } from './actions';

const actions = { fetchMainContents, fetchMainContentsSucceeded, fetchMainContentsFailed };

export type HomeAction = ActionType<typeof actions>;

export type Category = {
	id: string | null;
	name: string | null;
	register_date: string | null;
	update_date: string | null;
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
export type Notice = {
	admin_id: number | null;
	category_id: string | null;
	content: string | null;
	id: number | null;
	register_date: string | null;
	subject: string | null;
	view_count: number | null;
};

export type HomeState = {
	category: Category | null;
	boardList: Board[];
	dailyPopularList: Board[];
	storageList: Board[];
	noticeList: Notice[];
	pending: boolean;
	error: boolean;
	errorMessage: string | null;
};
