import { AxiosRequestConfig } from 'axios';
import axios from '.';

// Modules
import { FetchBoardDetailPayload, FetchBoardDetailCommentPayload } from '../modules/boardDetail';

export function fetchBoardDetail({ id, categoryId }: FetchBoardDetailPayload) {
	const config: AxiosRequestConfig = {
		url: `/board/${categoryId}/${id}`,
		params: {
			orderType: 'collect-new'
		}
	};

	return axios()(config);
}

export function fetchBoardDetailComments({ id, categoryId, row }: FetchBoardDetailCommentPayload) {
	const config: AxiosRequestConfig = {
		url: `/board/${categoryId}/comment`,
		params: {
			orderType: 'collect-new',
			boardDataNo: id,
			row
		}
	};

	return axios()(config);
}

export default fetchBoardDetail;
