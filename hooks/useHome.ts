import { useSelector } from 'react-redux';

// Modules
import { RootState } from '../src/modules';

export default function useHome() {
	const homeState = useSelector((state: RootState) => state.home);

	return {
		...homeState
	};
}
