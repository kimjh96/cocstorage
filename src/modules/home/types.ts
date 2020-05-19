import { ActionType } from 'typesafe-actions';
import { fetchMainContents, fetchMainContentsSucceeded, fetchMainContentsFailed } from './actions';
import { Board } from '../boardDetail';

const actions = { fetchMainContents, fetchMainContentsSucceeded, fetchMainContentsFailed };

export type HomeAction = ActionType<typeof actions>;

export type Category = {
	id: string | null;
	name: string | null;
	register_date: string | null;
	update_date: string | null;
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
	category: Category;
	boardList: Board[];
	dailyPopularList: Board[];
	storageList: Board[];
	noticeList: Notice[];
	pending: boolean;
	error: boolean;
	errorMessage: string | null;
};
