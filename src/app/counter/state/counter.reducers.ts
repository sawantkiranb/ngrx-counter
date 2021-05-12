import { increment, decrement, reset, customIncrement, updateChannel } from './counter.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';

export function counterReducer(state, action) {
	return _counterReducer(state, action);
}

const _counterReducer = createReducer(
	initialState,
	on(increment, (state) => {
		return {
			...state,
			count: state.count + 1
		};
	}),
	on(decrement, (state) => {
		return {
			...state,
			count: state.count - 1
		};
	}),
	on(reset, (state) => {
		return {
			...state,
			count: 0
		};
	}),
	on(customIncrement, (state, action) => {
		return {
			...state,
			count: state.count + action.value
		};
	}),
	on(updateChannel, (state, action) => {
		return {
			...state,
			channel: action.name
		};
	})
);
