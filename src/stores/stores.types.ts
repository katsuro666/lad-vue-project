export interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
  address: object;
}

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}