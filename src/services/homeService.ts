import axios from '.';

export function fetchMainContents() {
	return axios().get('/main/content');
}

export default fetchMainContents;
