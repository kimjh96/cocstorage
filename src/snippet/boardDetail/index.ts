export function getOrderTypeByCategoryId(categoryId: string | string[]) {
	return categoryId === 'daily_popular' ? 'storage-new' : 'collect-new';
}

export function getBoardDataNoByCategoryId(id: number | undefined, boardDataNo: number | undefined, categoryId: string | string[]) {
	return categoryId === 'daily_popular' ? id : boardDataNo;
}

export default getOrderTypeByCategoryId;
