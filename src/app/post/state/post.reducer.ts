import { initialState } from './../../post/state/post.state';
import { createReducer } from '@ngrx/store';
export function postsReducer(state, action) {
  return _postsReducer(state, action);
}

export const _postsReducer = createReducer(initialState);
