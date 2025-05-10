'use client';

import { useState, useEffect } from 'react';
import { postCard } from '@/app/lib/definitions';
import { PostCard } from '@/app/ui/post-card';
import { deslugify } from '@/app/lib/actions';

export default function CommunityPage({ id }: { id: string }) {
  const [communityDescription, setCommunityDescription] = useState<string>('');
  const [communityImage, setCommunityImage] = useState<string | null>(null);
  const [posts, setPosts] = useState<postCard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      fetch(`/api/community/all`)
        .then((res) => res.json())
        .then((data) => {
          const community = data.find((c: any) => c.communityName.trim() === id);
          if (community) {
            setCommunityDescription(community.communityDescription);
            if (community.mediaId) {
              fetch(`/api/media/${community.mediaId}`)
                .then((res) => res.blob())
                .then((blob) => {
                  const url = URL.createObjectURL(blob);
                  setCommunityImage(url);
                })
                .catch(() => setError('Unable to load community image.'));
            }
          }
        })
        .catch(() => setError('Failed to load community info.'));

      fetch(`/api/community/${id}/posts`)
        .then((res) => res.json())
        .then((data) => {
          if (data.content) {
            const parsed: postCard[] = data.content.map((post: any) => ({
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
            setPosts(parsed);
          }
        })
        .catch(() => setError('Failed to load posts.'))
        .finally(() => setLoading(false));
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-8 space-y-12">
      {/* Header */}
      <section className="flex items-center space-x-6 bg-white shadow-md p-6 rounded-xl">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-300">
          {communityImage ? (
            <img
              src={communityImage}
              alt="Community Avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200" />
          )}
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-blue-600 capitalize">
            {deslugify(id)}
          </h1>
          <p className="text-base text-gray-600 mt-2">{communityDescription}</p>
        </div>
      </section>

      {/* Posts */}
      <section>
        <h2 className="text-3xl font-semibold text-blue-500 mb-6">Latest Posts</h2>
        <div className="grid gap-10">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <PostCard Post={post} key={index} />
            ))
          ) : (
            <p className="text-gray-500 text-center">No posts yet.</p>
          )}
        </div>
      </section>
    </main>
  );
}
