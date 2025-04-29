export type postCard = {
  owner_username: string;
  owner_name: string;
  owner_image_url: string;
  content_image_url?: string;
  message?: string;
  date: string;
  likes: number;
  comments: number;
};

export type post = {
  post_id: string;
  user_id: string;
  content: string;
}

export const tags: string[] = ['Technology', 'Sports', 'Gaming', 'Music', 'Art', 'Photography', 'Animals', 'Learning'];