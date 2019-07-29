export interface Post {
  body: string;
  comments?: Comment[];
  id: number;
  title: string;
  userId: number;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
