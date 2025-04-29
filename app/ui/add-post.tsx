'use client';

import React, { useState } from "react";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import { tags } from "@/app/lib/definitions";

export default function PostForm() {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("message", message);
    if (image) formData.append("image", image);

    // API'ye gönder
    const res = await fetch("/api/posts", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("Gönderi eklendi!");
      setMessage("");
      setImage(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 bg-white rounded-lg shadow-sm">
      {/* Mesaj Textarea */}
      <textarea
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
        placeholder="Start typing"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={3}
        required
      />

      {/* Dosya Seçme */}
      <div className="flex items-center justify-between gap-2">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="file:mr-2 file:py-1 file:px-3 file:rounded-md file:border file:bg-blue-50 file:text-blue-600 text-sm cursor-pointer"
        />
        {image && (
          <span className="text-xs text-gray-500 truncate max-w-[150px]">
            {image.name}
          </span>
        )}
      </div>

      <div className="mt-6">
        <p className="text-lg font-semibold text-gray-700 mb-4">Select tags</p>
        <ToggleGroup type="multiple" className="flex flex-wrap gap-4">
          {tags.map(tag => (
            <ToggleGroupItem
              key={tag}
              value={tag}
              className="flex items-center justify-center px-10 py-4 text-sm text-gray-700 rounded-full border border-gray-300 transition-all hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600 data-[state=on]:bg-blue-500 data-[state=on]:text-white"
            >
              {tag}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      {/* Gönder Butonu */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all text-sm"
      >
        Post
      </button>
    </form>
  );
}
