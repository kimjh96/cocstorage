import fetch from 'node-fetch';

export function fetchMainContents() {
	return fetch(`${process.env.API_BASE_URL}/main/content`);
}

export default fetchMainContents;
