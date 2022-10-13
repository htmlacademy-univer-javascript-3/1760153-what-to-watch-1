import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction<{ currentGenre: string }>('films/changeGenre');
export const resetMainPage = createAction('main/resetState');
export const increaseCardCount = createAction('main/increaseCardCount');
export const resetCardCount = createAction('main/resetCardCount');
