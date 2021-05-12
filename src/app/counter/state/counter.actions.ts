import { createAction, props } from '@ngrx/store';

export const increment = createAction('incrememt');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const customIncrement = createAction('customincrement', props<{ value: number }>());
export const updateChannel = createAction('updateChannel', props<{ name: string }>());
