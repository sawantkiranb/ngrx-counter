import { counterReducer } from '../counter/state/counter.reducers';
import { CounterState } from '../counter/state/counter.state';
import { postsReducer } from '../post/state/post.reducer';
import { PostState } from '../post/state/post.state';

export interface AppState {
  counter: CounterState;
  posts: PostState;
}

export const appReducer = {
  counter: counterReducer,
  posts: postsReducer
}
