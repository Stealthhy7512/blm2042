'use client';

import { useEffect, useState } from 'react';
import ProfileHeader from "@/app/ui/profileHeader";
import { PostCard } from '@/app/ui/post-card';
import { postCard, User, Socials } from '@/app/lib/definitions';

export default function UserPage({ username }: { username: string }) {
  const [user, setUser] = useState<User | null>(null);
  const [id, setId] = useState<number | null>(null);
  const [posts, setPosts] = useState<postCard[]>([]);
  const [socials, setSocials] = useState<Socials[]>([]);

  useEffect(() => {
    fetch(`/api/user/username/${username}`, {
      method: "GET",
      credentials: 'include',
    }).then(async res => {
      const data = await res.json();

      setId(data.userId);
      const userData: User = {
        displayName: data.visibleName,
        username: data.username,
        postNumber: data.postNumber,
        followers: data.followerNumber,
        following: data.followingNumber,
        isCurrentUser: false,
        profilePic: data.profilePhoto,
        banner: data.bannerPhoto,
      }
      setUser(userData);
    });
  }, []);
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
        }));
        const parsedSocials: Socials[] = data.content.map((post: any) => ({
          isLiked: post.isPostLiked,
          isFollowed: post.isPostAuthorFollowed,
        }));
        setPosts(parsedPosts);
        setSocials(parsedSocials);
      }
    });
  }, [id]);

  return (
    <div className="bg-gray-100 min-w-screen min-h-screen p-4">
      <div className="mx-auto">
        {/* Kullanıcı profilini başlık bileşenine gönder */}
        {user && <ProfileHeader user={user} />}

        <div className="flex items-center flex-col gap-y-[64px] justify-center text-black mt-4">
          {posts.map((post: postCard, index: number) => (
            <PostCard Post={post} Socials={socials[index]} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
