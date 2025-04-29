'use client'

import { useState } from "react";
import { PostCard } from "@/app/ui/post-card";
import { postCard } from "@/app/lib/definitions";

// Örnek post verisi
const posts: postCard[] = [
  {
    owner_username: "kaanyazici",
    owner_name: "Kaan Yazici",
    owner_image_url: "/customers/evil-rabbit.png",
    content_image_url: "/graph.png",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget enim mi. Duis varius leo augue, et maximus nisl venenatis vitae.",
    date: "03/03/2025",
    likes: 10,
    comments: 1,
  },
  {
    owner_username: "ali_veli",
    owner_name: "Ali Veli",
    owner_image_url: "/customers/ali-avatar.png",
    content_image_url: "/nature.jpg",
    message:
      "Sed auctor varius eros, sed facilisis ipsum interdum porta. Aliquam erat volutpat. Phasellus et ligula eu nulla.",
    date: "04/03/2025",
    likes: 25,
    comments: 5,
  },
  {
    owner_username: "muratYilmaz",
    owner_name: "Murat Yılmaz",
    owner_image_url: "/customers/murat-avatar.png",
    content_image_url: "/cityscape.jpg",
    message:
      "Vestibulum ut urna nec nibh tempus varius. Sed auctor varius eros, sed facilisis ipsum interdum porta. Curabitur accumsan metus.",
    date: "05/03/2025",
    likes: 30,
    comments: 7,
  },
];

export default function Home() {
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);

  const filteredPosts = selectedInterest
    ? posts.filter((post) => post.message.toLowerCase().includes(selectedInterest.toLowerCase()))
    : posts;

  return (
    <main className="min-h-screen w-full flex gap-8 py-16 ml-2 bg-gradient-to-b from-white via-blue-100 to-blue-300">
      {/* Filtreleme Paneli Sol Kısım */}
      <div className="w-64 max-h-[80vh] p-6 bg-white rounded-lg shadow-lg overflow-y-auto">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Filter Posts</h3>
        
        <div className="flex flex-col space-y-3">
          {/* Filtreleme Butonları */}
          {["Technology", "Gaming", "Music", "Sports", "Art", "Photography"].map((category) => (
            <button
              key={category}
              className="py-2 px-4 rounded-lg text-sm text-gray-800 border border-gray-300 hover:bg-blue-100 transition-all"
              onClick={() => setSelectedInterest(category)}
            >
              {category}
            </button>
          ))}
          {/* Clear Filter Button */}
          <button
            className="py-2 px-4 rounded-lg text-sm text-gray-600 border border-gray-300 hover:bg-gray-100 transition-all"
            onClick={() => setSelectedInterest(null)}
          >
            Clear Filter
          </button>
        </div>
      </div>

      {/* Postların Listelendiği Sağ Kısım */}
      <div className="w-full max-w-2xl space-y-8">
        {/* Dinamik olarak filtrelenmiş postları map ile listeleme */}
        {filteredPosts.map(post => (
          <PostCard key={post.owner_username} Post={post} />
        ))}
      </div>
    </main>
  );
}
