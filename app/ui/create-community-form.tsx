'use client';

import { useState } from "react";
import { toast } from "sonner";

export default function CommunityForm() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !description.trim()) {
        toast.error("Topluluk ismi ve açıklaması zorunludur.");
        return;
    }

    // TODO: Backend'e gönderme ve kullancıyı oluşan topluluk sayfasına yönlendirme
    toast.success(`Topluluk "${name}" başarıyla oluşturuldu!`);

    // Formu temizle
    setName("");
    setDescription("");
    setImage(null);
    };
    
    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 max-w-md mx-auto p-4 bg-white rounded-lg shadow-sm"
        >
            <input
                type="text"
                placeholder="Topluluk ismi"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
            />

            <textarea
                placeholder="Topluluk açıklaması"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
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

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all text-sm"
                >
                Topluluğu Oluştur
            </button>
        </form>
    );
}
