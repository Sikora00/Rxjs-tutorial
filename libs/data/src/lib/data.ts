export interface Author {
  id: number;
  name: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface Post {
  author?: Author;
  body: string;
  comments?: Comment[];
  id: number;
  title: string;
  userId: number;
}
