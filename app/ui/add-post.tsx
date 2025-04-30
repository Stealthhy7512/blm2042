'use client';

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { tags } from "@/app/lib/definitions";
import { toast } from "sonner";

export default function PostForm() {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim() && !image) {
      toast.error("Lütfen bir mesaj yazın veya görsel ekleyin.");
      return;
    }

    // Gönderim başarılıysa
    toast.success("Gönderi başarıyla oluşturuldu!", {
      description: selectedTags.length > 0
        ? `Etiketler: ${selectedTags.join(", ")}`
        : "Etiket seçilmedi.",
    });

    // Temizle
    setMessage("");
    setImage(null);
    setSelectedTags([]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto p-4 bg-white rounded-lg shadow-sm"
    >
      <textarea
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
        placeholder="Ne düşünüyorsun?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={3}
      />

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

      <div>
        <p className="text-sm font-medium mb-2 text-gray-700">İlgi alanları (isteğe bağlı):</p>
        <ToggleGroup
          type="multiple"
          value={selectedTags}
          onValueChange={setSelectedTags}
          className="flex flex-wrap gap-2"
        >
          {tags.map((tag) => (
            <ToggleGroupItem
              key={tag}
              value={tag}
              className="px-10 py-2 text-sm rounded-full border border-gray-300 text-gray-600 hover:bg-blue-100 data-[state=on]:bg-blue-600 data-[state=on]:text-white"
            >
              {tag}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all text-sm"
      >
        Gönder
      </button>
    </form>
  );
}
