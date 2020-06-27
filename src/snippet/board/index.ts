export function getSearchTypeLabelByType(type: string) {
	let searchTypeName: string | null = null;

	switch (type) {
	case 'all':
		searchTypeName = '전체';
		break;
	case 'subject':
		searchTypeName = '제목';
		break;
	case 'content':
		searchTypeName = '내용';
		break;
	case 'nickname':
		searchTypeName = '닉네임';
		break;
	default:
		searchTypeName = '전체';
		break;
	}

	return searchTypeName;
}

export function getCategoryNameByCategoryId(categoryId: string | string[]) {
	let categoryName: string | null = null;

	switch (categoryId) {
	case 'daily_popular':
		categoryName = '일간 개념글';
		break;
	case 'ib_new1':
		categoryName = '인터넷방송';
		break;
	case 'stream':
		categoryName = '스트리머';
		break;
	case 'football_new6':
		categoryName = '해외축구';
		break;
	case 'issuezoom':
		categoryName = '이슈';
		break;
	case 'exam_new':
		categoryName = '수능';
		break;
	case 'extra':
		categoryName = '헬스';
		break;
	case 'baseball_new9':
		categoryName = '국내야구';
		break;
	default:
		categoryName = '인터넷방송';
		break;
	}

	return categoryName;
}

export default getSearchTypeLabelByType;
