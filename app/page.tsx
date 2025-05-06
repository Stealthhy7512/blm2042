"use client"

import { useState } from "react";
import { PostCard } from "@/app/ui/post-card";
import { postCard } from "@/app/lib/definitions";
import { FilterPanel } from "@/app/ui/filter-panel";

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
  const categories = ["Technology", "Gaming", "Music", "Sports", "Art", "Photography"];

  const filteredPosts = selectedInterest
    ? posts.filter((post) =>
        (post.message ?? '').toLowerCase().includes(selectedInterest.toLowerCase())
      )
    : posts;

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10 flex flex-row items-start gap-10 max-w-7xl mx-auto">

      <FilterPanel
        categories={categories}
        selected={selectedInterest}
        onSelect={setSelectedInterest}
        onClear={() => setSelectedInterest(null)}
      />
      <section className="space-y-6">

        {filteredPosts.map((post) => (
          <PostCard key={post.owner_username} Post={post} />
        ))}
      </section>
    </main>
  );
}
