import React, {
	useEffect,
	useState,
	useCallback,
	useMemo
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

// Modules
import { postBoardDetailRecommend, clearBoardDetailRecommendState } from '../src/modules/boardDetail';
import { RootState } from '../src/modules';

export default function useBoardDetail() {
	const dispatch = useDispatch();
	const router = useRouter();
	const boardDetailState = useSelector((state: RootState) => state.boardDetail);
	const [thumbsSnackBarOpen, setThumbsSnackBarOpen] = useState<boolean>(false);
	const [errorThumbsSnackBarOpen, setErrorThumbsSnackBarOpen] = useState<boolean>(false);
	const [disabledRecommend, setDisabledRecommend] = useState<boolean>(false);

	const { id: categoryId, detail } = useMemo(() => (
		router.query
	), [router.query]);

	const onHandleBoardDetailRecommend = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
		const thumbsType: string = event.currentTarget.getAttribute('data-thumbs-type') || '';

		dispatch(postBoardDetailRecommend({
			id: Number(detail),
			categoryId,
			recommendType: thumbsType
		}));

		setDisabledRecommend(true);
	}, [dispatch, categoryId, detail]);

	const onHandleCloseSnackBar = useCallback(() => {
		setThumbsSnackBarOpen(false);
		setErrorThumbsSnackBarOpen(false);
	}, []);

	const onHandleExitedSnackBar = useCallback(() => {
		setDisabledRecommend(false);
	}, []);

	useEffect(() => {
		if (!boardDetailState.recommend.pending && boardDetailState.recommend.data && !boardDetailState.recommend.error) {
			setThumbsSnackBarOpen(true);
		} else if (!boardDetailState.recommend.pending && boardDetailState.recommend.error) {
			setErrorThumbsSnackBarOpen(true);
		}
	}, [boardDetailState.recommend]);

	useEffect(() => () => { dispatch(clearBoardDetailRecommendState()); }, [dispatch]);

	return {
		...boardDetailState,
		thumbsSnackBarOpen,
		errorThumbsSnackBarOpen,
		disabledRecommend,
		onHandleBoardDetailRecommend,
		onHandleCloseSnackBar,
		onHandleExitedSnackBar
	};
}
