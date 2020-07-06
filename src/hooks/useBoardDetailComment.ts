import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

// Modules
import { fetchBoardDetailComments } from '../modules/boardDetail';
import { RootState } from '../modules';

export default function useBoardDetailComment() {
	const router = useRouter();
	const dispatch = useDispatch();
	const { board: boardDetailState, comment: boardDetailCommentState } = useSelector(
		(state: RootState) => state.boardDetail
	);

	const [row, setRow] = useState<number>(20);

	const onHandleCommentRow = useCallback(() => {
		setRow(row + 20);
	}, [row]);

	useEffect(() => {
		if (!boardDetailState.pending && boardDetailState.data.data_no) {
			dispatch(
				fetchBoardDetailComments({
					id: boardDetailState.data.id || 0,
					boardDataNo: boardDetailState.data.data_no,
					categoryId: router.query.id,
					row
				})
			);
		}
	}, [dispatch, router.query, boardDetailState.pending, boardDetailState.data.id, boardDetailState.data.data_no, row]);

	return {
		onHandleCommentRow,
		...boardDetailCommentState,
		row
	};
}
