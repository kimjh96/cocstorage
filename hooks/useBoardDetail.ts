import { useSelector } from 'react-redux';

// Modules
import { RootState } from '../src/modules';

export default function useBoardDetail() {
	const boardDetailState = useSelector((state: RootState) => state.boardDetail.board);

	return {
		...boardDetailState
	};
}
