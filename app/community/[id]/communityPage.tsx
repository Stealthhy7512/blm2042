'use client';

import { useState, useEffect } from 'react';
import { postCard } from '@/app/lib/definitions'
import {PostCard} from '@/app/ui/post-card';
import { deslugify } from '@/app/lib/actions';

export default function CommunityPage({ id }: { id: string }) {
  const [posts, setPosts] = useState<postCard[]>([])
  const [communityImage, setCommunityImage] = useState<string | null>(null);
  const [communityDescription, setCommunityDescription] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
        const communityResponse = await fetch(`/api/community/all`);
        const communityData = await communityResponse.json();
        console.log(communityData);
        const community = communityData.find((community: any) => community.communityName.trim() === deslugify(id));
        if (community) {
          setCommunityDescription(community.communityDescription);
          const mediaId = community.mediaId;
          if (mediaId) {
            fetch(`/api/media/${mediaId}`)
              .then((imageResponse) => imageResponse.blob())
              .then((imageBlob) => {
                const imageUrl = URL.createObjectURL(imageBlob);
                setCommunityImage(imageUrl);
              });
          }
        } else {
          setCommunityDescription('No description available');
        }

        const postsResponse = await fetch(`/api/community/${id}/posts`);
        const postsData = await postsResponse.json();

        if (postsResponse.ok) {
          const parsedPosts: postCard[] = postsData.content.map((post: any) => ({
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
            date: post.createdAt,
          }));
          setPosts(parsedPosts);
        }
    };

    fetchData();
  }, [id]);

  return (
    <main className="w-full mx-auto p-6 space-y-12">
      <section className="flex items-center space-x-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 overflow-hidden">
          {communityImage && (
            <img
              src={communityImage}
              alt="Community Avatar"
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-semibold text-gray-900 capitalize">
            {deslugify(id)}
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            {communityDescription}
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Latest Posts</h2>
        <div className="bg-gray-100 min-w-screen min-h-screen p-4">
          <div className="mx-auto">
            <div className="flex items-center flex-col gap-y-[64px] justify-center text-black mt-4">
              {posts.map((post: postCard, index: number) => (
                <PostCard Post={post} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}