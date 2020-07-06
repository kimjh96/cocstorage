import { AxiosRequestConfig } from 'axios';
import axios from '.';

// Modules
import { FetchBoardDetailPayload, FetchBoardDetailCommentPayload } from '../modules/boardDetail';

// Snippets
import { getOrderTypeByCategoryId, getBoardDataNoByCategoryId } from '../snippet/boardDetail';

export function fetchBoardDetail({ id, categoryId }: FetchBoardDetailPayload) {
	const config: AxiosRequestConfig = {
		url: `/board/${categoryId}/${id}`,
		params: {
			orderType: getOrderTypeByCategoryId(categoryId)
		}
	};

	return axios()(config);
}

export function fetchBoardDetailComments({
	id, boardDataNo, categoryId, row
}: FetchBoardDetailCommentPayload) {
	const config: AxiosRequestConfig = {
		url: `/board/${categoryId}/comment`,
		params: {
			orderType: getOrderTypeByCategoryId(categoryId),
			boardDataNo: getBoardDataNoByCategoryId(id, boardDataNo, categoryId),
			row
		}
	};

	return axios()(config);
}

export function postBoardDetailRecommend({ id, categoryId, recommendType }: any) {
	const config: AxiosRequestConfig = {
		url: `/storage/${categoryId}/${id}/recommend`,
		method: 'post',
		params: {
			orderType: getOrderTypeByCategoryId(categoryId),
			recommendType
		}
	};

	return axios()(config);
}

export default fetchBoardDetail;
