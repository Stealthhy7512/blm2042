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
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <div>
        <label className="block text-sm font-medium text-gray-700">Görünür İsim</label>
        <input
          className="w-full p-3 mt-2 border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-gray-400 text-gray-700 transition-all"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Ahmet"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Kullanıcı Adı</label>
        <input
          className="w-full p-3 mt-2 border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-gray-400 text-gray-700 transition-all"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="ahmet012"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Hakkımda (bio)</label>
        <textarea
          className="w-full p-3 mt-2 border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-gray-400 text-gray-700 transition-all"
          rows={3}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Kendimi geliştirmeyi seviyorum."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Profil Fotoğrafı</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setProfilePic(e.target.files?.[0] || null)}
          className="mt-2 file:border file:border-gray-300 file:rounded-lg file:px-4 file:py-2 file:text-sm file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:transition-all"
        />
        {profilePic && (
          <div className="mt-4 flex justify-center">
            <img
              src={URL.createObjectURL(profilePic)}
              alt="Profile Preview"
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 shadow-md"
            />
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Banner</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setBanner(e.target.files?.[0] || null)}
          className="mt-2 file:border file:border-gray-300 file:rounded-lg file:px-4 file:py-2 file:text-sm file:bg-gray-200 hover:file:bg-gray-300 file:transition-all"
        />
        {banner && (
          <div className="mt-4">
            <img
              src={URL.createObjectURL(banner)}
              alt="Banner Preview"
              className="w-full h-32 object-cover rounded-lg border-2 border-gray-300 shadow-md"
            />
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      >
        Kaydet
      </button>
    </form>
  );
}
