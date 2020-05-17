import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

// Modules
import {
	clearBoardsSearchState,
	fetchBoards,
	handleBoardsSearchState,
	SearchState
} from '../src/modules/board';
import { RootState } from '../src/modules';

export default function useBoard() {
	const router = useRouter();
	const dispatch = useDispatch();
	const boardState = useSelector((state: RootState) => state.board);

	const [dialogState, setDialogState] = useState<boolean>(false);

	const { id: categoryId } = useMemo(() => (
		router.query
	), [router.query]);

	const onHandlePagination = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
		dispatch(fetchBoards({ categoryId, page: value, searchState: boardState.searchState }));
	}, [dispatch, categoryId, boardState.searchState]);

	const onHandleSearchTypeSelect = useCallback((event: React.ChangeEvent<{ value: unknown }>) => {
		const type = String(event.target.value);

		dispatch(handleBoardsSearchState({
			...boardState.searchState,
			type
		}));
	}, [dispatch, boardState.searchState]);

	const onHandleSearchValueInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		const value = String(event.target.value);

		dispatch(handleBoardsSearchState({
			...boardState.searchState,
			value
		}));
	}, [dispatch, boardState.searchState]);

	const onHandleSearchValueInputKey = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			const nextSearchState: SearchState = {
				...boardState.searchState,
				handle: true
			};

			dispatch(handleBoardsSearchState(nextSearchState));
			dispatch(fetchBoards({ categoryId, page: 1, searchState: nextSearchState }));
		}
	}, [dispatch, categoryId, boardState.searchState]);

	const onHandleDialog = useCallback(() => {
		setDialogState(!dialogState);
	}, [dialogState]);

	useEffect(() => {
		dispatch(clearBoardsSearchState());
	}, [dispatch, categoryId]);

	return {
		categoryId,
		...boardState,
		dialogState,
		onHandleSearchTypeSelect,
		onHandleSearchValueInput,
		onHandleSearchValueInputKey,
		onHandleDialog,
		onHandlePagination
	};
}
