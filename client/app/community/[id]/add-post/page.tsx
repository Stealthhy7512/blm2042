'use client';

import { useState, FormEvent } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

export default function NewPostPage() {
  const router = useRouter();

  const params = useParams<{ id: string }>();
  const id = params.id;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ title, content, community: id });
    router.push(`/community/${id}`);
  };

  return (
    <main className="max-w-2xl mx-auto py-8 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Create New Post</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Başlık
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Gönderi başlığı girin"
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              İçerik
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={6}
              className="mt-1 block w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
              placeholder="Gönderi içeriğini buraya yazın"
            />
          </div>
          <div className="flex justify-between items-center">
            <Link
              href={`/community/${id}`}
              className="text-gray-600 hover:underline"
            >
              ← Vazgeç
            </Link>
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Oluştur
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
