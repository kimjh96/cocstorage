import { createAction } from 'typesafe-actions';
import { HomeState } from './types';

export const FETCH_MAIN_CONTENTS_REQUESTED = 'home/FETCH_MAIN_CONTENTS_REQUESTED';
export const FETCH_MAIN_CONTENTS_SUCCEEDED = 'home/FETCH_MAIN_CONTENTS_SUCCEEDED';
export const FETCH_MAIN_CONTENTS_FAILED = 'home/FETCH_MAIN_CONTENTS_FAILED';

export const fetchMainContents = createAction(FETCH_MAIN_CONTENTS_REQUESTED)();
export const fetchMainContentsSucceeded = createAction(FETCH_MAIN_CONTENTS_SUCCEEDED)<HomeState>();
export const fetchMainContentsFailed = createAction(FETCH_MAIN_CONTENTS_FAILED)<string>();
