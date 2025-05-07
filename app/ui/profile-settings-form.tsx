'use client';

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { z } from 'zod';

const formSchema = z.object({
  displayName: z.string().min(1, 'Name must require at least 1 character.'),
  username: z.string().min(1, 'Username must require at least 1 character.'),
  bio: z.string().optional(),
})

export default function ProfileSettingsForm() {
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [banner, setBanner] = useState<File | null>(null);

  // FIXME: setProfilePic will fail, backend should serve virtual endpoint URL
  useEffect(() => {
    fetch('http://localhost:8080/user/settings', {
      credentials: 'include',
    }).then(async res => {
      const data = await res.json();

      if (res.ok) {
        setDisplayName(data.displayName);
        setUsername(data.username);
        setBio(data.bio);
        setProfilePic(data.profilePic);
        setBanner(data.banner);
      }
    })
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validatedFields = formSchema.safeParse({
      displayName: displayName,
      username: username,
      bio: bio,
    });

    if (!validatedFields.success) {
      validatedFields.error.errors.map(err => toast.error(err.message));
      console.log(validatedFields.error.errors.map(err => err.message));
      return;
    }
    const validatedData = validatedFields.data;

    const formData = new FormData();
    Object.entries(validatedData).forEach(([key, value]) => {
      value && formData.append(key, value);
    });
    profilePic && formData.append('profilePic', profilePic);
    banner && formData.append('banner', banner);

    fetch('/api/user/settings', {
      method: 'POST',
      credentials: 'include',
      body: formData,
    }).then(async res => {
      if (res.ok) {
        toast.success("Settings are successfully changed")
      } else {
        // Error handling
      }
    })
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
