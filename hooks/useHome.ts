import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../src/modules';

export default function useHome() {
	const homeState = useSelector((state: RootState) => state.home);

	return {
		...homeState
	};
}
