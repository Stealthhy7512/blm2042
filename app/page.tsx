"use client"

import { PostCard } from "@/app/ui/post-card";
import { postCard } from "@/app/lib/definitions";
import { useState, useEffect } from 'react';


export default function Home() {
  const [posts, setPosts] = useState<postCard[]>([]);

  useEffect(() => {
    fetch(`/api/user/post-feed`, {
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
  }, []);

  return (
    <main className="min-h-screen min-w-screen bg-gray-50 px-6 py-10 flex flex-col md:flex-row mx-auto items-center justify-center gap-10">
      <section className="w-full">
        <div className="w-full flex flex-col items-center gap-y-[64px] justify-center text-black mt-4">
          {posts.map((post: postCard, index: number) => (
            <div key={index} className="w-full max-w-xl">
              <PostCard Post={post} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
