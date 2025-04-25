'use client';

import { useState } from "react";

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
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Ne düşünüyorsun?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        required
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Gönder
      </button>
    </form>
  );
}
    
