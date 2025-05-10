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
      return fetch(`/api/user/${username}/profile`, {
        method: "GET",
        credentials: 'include',
      });
    }).then(async res => {
        const data = await res.json();

        setId(data.UserProfileDto.userId);
        const userData: User = {
          displayName: data.UserProfileDto.visibleName,
          username: data.UserProfileDto.username,
          postNumber: data.UserProfileDto.postNumber,
          followers: data.UserProfileDto.followerNumber,
          following: data.UserProfileDto.followingNumber,
          isCurrentUser: sessionUsername === data.UserProfileDto.username,
          profilePicId: data.UserProfileDto.profilePhotoId,
          bannerId: data.UserProfileDto.bannerPhotoId,
          isFollowed: data.isFollowing,
          isBlocked: data.isBlocked,
          bio: data.UserProfileDto.bio,
        };
        setUser(userData);
        console.log(userData);
      });
    }, [username]);

  useEffect(() => {
    console.log(id);
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
          owner_image_url: post.userSummary.profilePhotoId,
          content_image_url: post.mediaId,
          message: post.content,
          likes: post.numberOfPostLike,
          comments: post.numberOfPostComment,
          isLiked: post.isPostLiked,
          isFollowed: post.isPostAuthorFollowed,
          date: post.createdAt,
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
