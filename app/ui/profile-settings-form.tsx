'use client';

import { useState } from "react";

export default function ProfileSettingsForm() {
  const [displayName, setDisplayName] = useState("Ahmet");
  const [username, setUsername] = useState("ahmet012");
  const [bio, setBio] = useState("Kendimi geliştirmeyi seviyorum.");
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [banner, setBanner] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("displayName", displayName);
    formData.append("username", username);
    formData.append("bio", bio);
    if (profilePic) formData.append("profilePic", profilePic);
    if (banner) formData.append("banner", banner);

    // API'ye gönderilebilir
    alert("Profil ayarları güncellendi!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium">Görünür İsim</label>
        <input
          className="w-full p-2 border rounded"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Kullanıcı Adı</label>
        <input
          className="w-full p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Hakkımda (bio)</label>
        <textarea
          className="w-full p-2 border rounded"
          rows={3}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Profil Fotoğrafı</label>
        <input type="file" accept="image/*" onChange={(e) => setProfilePic(e.target.files?.[0] || null)} />
      </div>

      <div>
        <label className="block text-sm font-medium">Banner</label>
        <input type="file" accept="image/*" onChange={(e) => setBanner(e.target.files?.[0] || null)} />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Kaydet
      </button>
    </form>
  );
}
