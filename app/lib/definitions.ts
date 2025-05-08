// Backend icin daha rahat olacaksa tipler ayarlanabilir

export type postCard = {
  postId: number;
  owner_username: string;
  owner_name: string;
  owner_image_url: string;
  content_image_url?: string;
  message?: string;
  date: string;
  likes: number;
  comments: number;
};

export type Socials = {
  isLiked: boolean;
  isFollowed: boolean;
}

export type Comment = {
  authorUsername: string,
  authorProfilePic: string,
  content: string,
}

export type User = {
  displayName: string;
  username: string;
  postNumber: number;
  following: number;
  followers: number;
  // Optional fallback
  profilePic: string;
  // Optional fallback
  banner: string;
  isCurrentUser?: boolean;
}

export const tags: string[] = ['Technology', 'Sports', 'Gaming', 'Music', 'Art', 'Photography', 'Animals', 'Learning'];