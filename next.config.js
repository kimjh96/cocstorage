const withImages = require('next-images');

module.exports = withImages({
	webpack(config) {
		return config;
	},
	env: {
		API_BASE_URL: 'https://api.cocstorage.com/api'
	}
});
