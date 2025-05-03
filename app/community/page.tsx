// app/community/page.tsx

import Link from "next/link";
import { Gamepad, BookOpen, Cpu } from "lucide-react";

const dummyCommunities = [
  { id: "gaming", name: "Gaming", description: "Oyun dünyasına dair her şey.", icon: <Gamepad size={28} className="text-blue-500" /> },
  { id: "books", name: "Kitap Kulübü", description: "Kitaplar, incelemeler ve öneriler.", icon: <BookOpen size={28} className="text-green-500" /> },
  { id: "tech", name: "Teknoloji", description: "Yazılım, donanım ve yenilikler.", icon: <Cpu size={28} className="text-purple-500" /> },
];

export default function CommunityPage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Topluluklar</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyCommunities.map((community) => (
          <Link key={community.id} href={`/community/${community.id}`}
            className="group block bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
            <div className="flex items-center p-6 space-x-4">
              <div className="p-2 bg-gray-100 rounded-full group-hover:bg-gray-200 transition">
                {community.icon}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">{community.name}</h2>
                <p className="text-gray-600 mt-1">{community.description}</p>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 group-hover:bg-blue-50 transition">
              <button className="w-full text-center text-sm font-medium text-blue-600 group-hover:text-white group-hover:bg-blue-600 bg-blue-100 py-2 rounded-lg transition">
                Katıl
              </button>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
