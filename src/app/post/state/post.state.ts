
export interface Post {
  id: number;
  title: string;
  description: string;
}

export interface PostState {
  posts: Post[]
}

export const initialState: PostState = {
  posts: [
    { id: 1, title: 'First post', description: 'First post description' },
    { id: 2, title: 'Second post', description: 'Second post description' },
  ]
}
