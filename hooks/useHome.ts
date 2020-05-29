import { useSelector } from 'react-redux';

// Modules
import { RootState } from '../src/modules';
import { useState } from 'react';

export default function useHome() {
	const homeState = useSelector((state: RootState) => state.home);
	const [dummyBoardArray] = useState<number[]>([1, 2, 3, 4, 5, 6]);
	const [dummyDailyPopularBoardArray] = useState<number[]>([1, 2, 3, 4, 5]);

	return {
		...homeState,
		dummyDailyPopularBoardArray,
		dummyBoardArray
	};
}
