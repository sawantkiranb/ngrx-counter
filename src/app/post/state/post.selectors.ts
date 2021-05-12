import { PostState } from './post.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const postSelector = createFeatureSelector<PostState>('posts');

export const getposts = createSelector(postSelector, (state) => {
  return state.posts;
});
