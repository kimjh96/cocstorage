import axios from 'axios';

export default function axiosInstance() {
	axios.defaults.baseURL = `${process.env.API_BASE_URL}`;

	return axios;
}
