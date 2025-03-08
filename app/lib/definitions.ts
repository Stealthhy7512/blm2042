export type postCard = {
  id: string;
  post_owner: string;
  owner_url: string;
  image_url?: string;
  message?: string;
  date: string;
  likes: number;
  comments: number;
};