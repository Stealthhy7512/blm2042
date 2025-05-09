'use client';

import { useEffect, useState } from 'react';
import ProfileHeader from "@/app/ui/profileHeader";
import { PostCard } from '@/app/ui/post-card';
import { postCard, User } from '@/app/lib/definitions';

export default function UserPage({ username }: { username: string }) {
  const [user, setUser] = useState<User | null>(null);
  const [id, setId] = useState<number | null>(null);
  const [posts, setPosts] = useState<postCard[]>([]);

  useEffect(() => {
    let sessionUsername: string | null = null;

    fetch(`/api/user/profile`, {
      method: 'POST',
      credentials: 'include',
    }).then(async res => {
      const data = await res.json();
      if (res.ok) {
        sessionUsername = data.username;
        return sessionUsername;
      }
    }).then(() => {
      return fetch(`/api/user/username/${username}`, {
        method: "GET",
        credentials: 'include',
      });
    }).then(async res => {
        const data = await res.json();

        setId(data.userId);
        const userData: User = {
          displayName: data.visibleName,
          username: data.username,
          postNumber: data.postNumber,
          followers: data.followerNumber,
          following: data.followingNumber,
          isCurrentUser: sessionUsername === data.username,
          profilePic: data.profilePhoto,
          banner: data.bannerPhoto,
        };
        setUser(userData);
      });
    }, [username]);

  useEffect(() => {
    fetch(`/api/post/${id}/posts`, {
      method: 'GET',
      credentials: 'include',
    }).then(async res => {
      const data = await res.json();

      if (res.ok) {
        const parsedPosts: postCard[] = data.content.map((post: any) => ({
          postId: post.postId,
          owner_username: post.userSummary.username,
          owner_name: post.userSummary.visibleName,
          owner_image_url: post.userSummary.profilePhoto,
          content_image_url: post.postImage,
          message: post.content,
          likes: post.numberOfPostLike,
          comments: post.numberOfPostComment,
          isLiked: post.isPostLiked,
          isFollowed: post.isPostAuthorFollowed,
        }));
        setPosts(parsedPosts);
      }
    });
  }, [id]);

  return (
    <div className="bg-gray-100 min-w-screen min-h-screen p-4">
      <div className="mx-auto">
        {user && <ProfileHeader user={user} />}

        <div className="flex items-center flex-col gap-y-[64px] justify-center text-black mt-4">
          {posts.map((post: postCard, index: number) => (
            <PostCard Post={post} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
