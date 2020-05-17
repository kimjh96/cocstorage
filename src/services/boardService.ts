import { AxiosRequestConfig } from 'axios';
import axios from '.';

// Modules
import { FetchBoardPayload } from '../modules/board';

export function fetchBoards({ categoryId, page }: FetchBoardPayload) {
	const config: AxiosRequestConfig = {
		url: `/board/${categoryId}`,
		params: {
			orderType: 'collect-new',
			page
		}
	};

	return axios()(config);
}

export function fetchSearchBoards({
	categoryId,
	searchState,
	page
}: FetchBoardPayload) {
	const config: AxiosRequestConfig = {
		url: `/board/${categoryId}`,
		params: {
			orderType: 'collect-new',
			searchType: searchState?.type,
			searchValue: searchState?.value,
			page
		}
	};

	return axios()(config);
}

export default fetchBoards;
