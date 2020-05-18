import { AxiosRequestConfig } from 'axios';
import axios from '.';

// Modules
import { FetchBoardDetailPayload } from '../modules/boardDetail';

export function fetchBoardDetail({ id, categoryId }: FetchBoardDetailPayload) {
	const config: AxiosRequestConfig = {
		url: `/board/${categoryId}/${id}`,
		params: {
			orderType: 'collect-new'
		}
	};

	return axios()(config);
}

export default fetchBoardDetail;
