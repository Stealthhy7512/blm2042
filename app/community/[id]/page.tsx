// app/community/[id]/page.tsx
// import { useState } from 'react';
import { notFound } from "next/navigation";
import Link from "next/link";
import { Heart, MessageCircle, UserPlus, UserCheck } from "lucide-react";

// Örnek auth kontrolü
const isAdmin = false;    // Gerçek projede auth verisinden alınmalı

type Post = {
  title: string;
  content: string;
  author: string;
  date: string;
  avatar: string;
  likes: number;
  comments: number;
  id: string;
};
type CommunityPosts = Record<string, Post[]>;

// Dummy veriler
const dummyPosts: CommunityPosts = {
  gaming: [
    {
      title: "En iyi 2025 oyunları",
      content: "Bu yılın en iyi oyunlar başlıkları ve detaylı incelemeleri burada.",
      author: "Admin",
      date: "2025-01-01",
      avatar: "https://i.pravatar.cc/150?u=gaming",
      likes: 120,
      comments: 34,
      id: "1",
    },
    {
      title: "LoL vs Valorant: Karşılaştırma",
      content: "İki popüler FPS oyununun artı ve eksileri incelemesi.",
      author: "User123",
      date: "2025-02-15",
      avatar: "https://i.pravatar.cc/150?u=gaming2",
      likes: 78,
      comments: 12,
      id: "2",
    },
  ],
  books: [
    {
      title: "Kafka'nın Dönüşüm'ü",
      content: "Bir sabah uyandığınızda kendinizi böcek olarak bulsanız nasıl hissederdiniz?",
      author: "Bookworm",
      date: "2025-03-01",
      avatar: "https://i.pravatar.cc/150?u=books",
      likes: 54,
      comments: 8,
      id: "3",
    },
  ],
  tech: [
    {
      title: "Yeni MacBook M5 İncelemesi",
      content: "M5 çipi performans ve enerji verimliliğinde ne kadar iyileşme sağlıyor?",
      author: "TechGuru",
      date: "2025-04-10",
      avatar: "https://i.pravatar.cc/150?u=tech",
      likes: 200,
      comments: 42,
      id: "4",
    },
  ],
};

export default async function CommunityDetailPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const posts = dummyPosts[id];
  if (!posts) return notFound();

  // Takip durumu state'i
  // const [isFollowing, setIsFollowing] = useState(false);

  // const toggleFollow = () => {
  //   // TODO: API isteği ekle
  //   setIsFollowing(prev => !prev);
  // };
  const isFollowing = false;

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-12">
      {/* Community Profile Section */}
      <section className="flex items-center space-x-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 overflow-hidden">
          <img
            src={`https://i.pravatar.cc/150?u=${id}`}
            alt="Community Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-semibold text-gray-900 capitalize">
            {id} Topluluğu
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Bu topluluk, güncel paylaşımlar ve tartışmalar için oluşturuldu.
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <span className="text-xl font-semibold text-gray-800">
              2.341 Takipçi
            </span>
            {isAdmin ? (
              <Link
                href={`/community/${id}/add-post`}
                className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
              >
                Yeni Gönderi
              </Link>
            ) : (
              <button
                // onClick={toggleFollow}
                className="flex items-center space-x-2 px-4 py-2 border rounded-full hover:bg-gray-100 transition"
              >
                {isFollowing ? (
                  <><UserCheck size={16} className="text-blue-600" /><span>Takip Ediliyor</span></>
                ) : (
                  <><UserPlus size={16} className="text-gray-600" /><span>Takip Et</span></>
                )}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Son Paylaşımlar</h2>
        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/community/${id}/post/${post.id}`}
              className="block bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <div className="flex items-center p-4 space-x-4 border-b border-gray-100">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{post.author}</p>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <h3 className="text-2xl font-bold text-gray-800">{post.title}</h3>
                <p className="text-gray-700 leading-relaxed truncate-3-lines">
                  {post.content}
                </p>
              </div>
              <div className="flex justify-start items-center p-4 border-t border-gray-100 space-x-6">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-red-500 transition">
                  <Heart size={20} />
                  <span className="text-sm">{post.likes}</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500 transition">
                  <MessageCircle size={20} />
                  <span className="text-sm">{post.comments}</span>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
